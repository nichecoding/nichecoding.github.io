
***

The data associated with the date, including additional metadata.

# Interface
```ts
interface CalendarMetadata {
    isStart: boolean;
    isEnd: boolean;
    datesInRange: DateString[];
}
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `datesInRange` | [`DateString`](DateString.md)[] | An array of dates that fall between the event's start date (`startAt`) and end date (`endAt`), inclusive. |
| `isEnd` | `boolean` | Indicates whether the event ends on this date. `true` means this date is the end of the event, and `false` otherwise. |
| `isStart` | `boolean` | Indicates whether the event starts on this date. `true` means this date is the start of the event, and `false` otherwise. |
