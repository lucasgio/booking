import { Route } from '../interface/TypeResultsFlights';
import { Panel } from 'rsuite';
import dayjs from 'dayjs';

export const PanelApp = ({cityFrom,cityTo,dTime,aTimeUTC,price}:Route) => {

    const departureTime = new Date(dTime * 1000);
    const arrivalTime   = new Date(aTimeUTC * 1000) 

    return (
      <>
        <Panel className="result_card" bordered>
        <dl>
          <dt>From:</dt>
          <dd>{cityFrom}</dd>
          <dt>To:</dt>
          <dd>{cityTo}</dd>
          <dt>Date and Time Departure:</dt>
          <dd>{dayjs(departureTime).format("DD/MMMM/YYYY:h:mm:ss A")}</dd>
          <dt>Date and Time Arrival:</dt>
          <dd>{dayjs(arrivalTime).format("DD/MMMM/YYYY:h:mm:ss A")}</dd>
          <dt>Price:</dt>
          <dd>{price}.00</dd>
        </dl>
      </Panel>
      </>
    )
}
