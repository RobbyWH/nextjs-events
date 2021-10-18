import EventItem, {EventItemProps} from './EventItem';
import styles from './EventList.module.css';

interface EventListProps {
  items: Array<EventItemProps>
}

const EventList = (props: EventListProps) => {
  const {items} = props;

  return (
    <ul className={styles.list}>
      {items.map(event => <EventItem key={event.id} {...event} />)}
    </ul>
  )
}

export default EventList;