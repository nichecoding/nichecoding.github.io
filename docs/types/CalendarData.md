
***



The data displayed in the calendar, including events

# Interface
```ts
interface CalendarData {
    startAt: Date;
    endAt: Date;
    content: string;
    color: string;
    id: string;
}
```


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `color` | `string` | The color associated with the event, typically used for visual distinction in the calendar. |
| `content` | `string` | The content or description of the event. |
| `endAt` | `Date` | The ending date and time of the event. |
| `id` | `string` | A unique identifier for the event. |
| `startAt` | `Date` | The starting date and time of the event. |
