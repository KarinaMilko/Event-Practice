import { connect } from 'react-redux';
import { getEventsThunk, setFilter } from '../../store/slices/eventsSlice';
import { useEffect } from 'react';

function EventsPage({
  getEvents,
  events,
  filter,
  setFilter,
  isFetching,
  errors,
}) {
  useEffect(() => {
    getEvents(filter);
  }, [filter]);

  const { isOnline } = filter;

  return (
    <>
      <section>
        <h2>Filters</h2>
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

const mapStateToProps = ({ eventsData }) => eventsData;

const mapDispatchToProps = dispatch => ({
  getEvents: filter => dispatch(getEventsThunk(filter)),
  setFilter: newFilter => dispatch(setFilter(newFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
