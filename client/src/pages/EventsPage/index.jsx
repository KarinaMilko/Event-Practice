import { connect } from 'react-redux';
import {
  changeCategoriesFilter,
  getEventsThunk,
  setFilter,
} from '../../store/slices/eventsSlice';
import { useEffect } from 'react';
import { getCategoriesThunk } from '../../store/slices/categoriesSlice';

function EventsPage({
  getEvents,
  getCategories,
  changeCategoriesFilter,
  events,
  filter,
  setFilter,
  isFetching,
  errors,
  categories,
}) {
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getEvents(filter);
  }, [filter]);

  const { isOnline, categoryId: selectedCategories } = filter;

  return (
    <>
      <section>
        <h2>Filters</h2>
        <section>
          <h3>Online/Offline:</h3>
          <select
            value={isOnline}
            onChange={e => {
              setFilter({ isOnline: e.target.value });
            }}
          >
            <option value="">All</option>
            <option value={true}>Online</option>
            <option value={false}>Offline</option>
          </select>
        </section>
        <section>
          <h3>Categories:</h3>
          {categories.map(c => (
            <label key={c.id}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(c.id)}
                onChange={() => changeCategoriesFilter(c.id)}
              />
              {c.name}
            </label>
          ))}
        </section>
      </section>

      <ul>
        {events.map(e => (
          <li key={e.id} style={{ marginTop: '15px' }}>
            {JSON.stringify(e)}
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = ({ eventsData, categoriesData: { categories } }) => ({
  ...eventsData,
  categories,
});

const mapDispatchToProps = dispatch => ({
  getEvents: filter => dispatch(getEventsThunk(filter)),
  getCategories: () => dispatch(getCategoriesThunk()),
  setFilter: newFilter => dispatch(setFilter(newFilter)),
  changeCategoriesFilter: id => dispatch(changeCategoriesFilter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
