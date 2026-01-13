import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect, useRef } from 'react';
import {
  changeCategoriesFilter,
  getEventsThunk,
  setFilter,
} from '../../store/slices/eventsSlice';
import { getCategoriesThunk } from '../../store/slices/categoriesSlice';

function EventsPage({
  getEvents,
  getCategories,
  setFilter,
  changeCategoriesFilter,
  events,
  isFetching,
  errors,
  filter,
  categories,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isSetFilterFromPage = useRef(false);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (!isSetFilterFromPage.current) {
      const filterFromUrl = queryString.parse(searchParams.toString(), {
        parseNumbers: true,
      });
      if (!('isOnline' in filterFromUrl)) {
        filterFromUrl.isOnline = '';
      }
      if (!('categoryId' in filterFromUrl)) {
        filterFromUrl.categoryId = [];
      }

      setFilter(filterFromUrl);
    } else {
      isSetFilterFromPage.current = false;
    }
  }, [searchParams]);

  useEffect(() => {
    if (isSetFilterFromPage.current) {
      const filterToSearchParams = { ...filter };
      if (filter.isOnline === '') {
        delete filterToSearchParams.isOnline;
      }

      setSearchParams(filterToSearchParams);
    }

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
              isSetFilterFromPage.current = true;
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
                onChange={() => {
                  isSetFilterFromPage.current = true;
                  changeCategoriesFilter(c.id);
                }}
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
