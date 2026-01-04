import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getEvents = filter =>
  httpClient.get(
    `/events?${queryString.stringify(filter, { skipEmptyString: true })}`
  );

//   httpClient.get(`/events?isOnline=${filter.isOnline}`);
