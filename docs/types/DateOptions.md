
***

# Interface

```ts
interface DateOptions {
    isSelected: boolean;
    isToday: boolean;
    isDisabled: boolean;
    items: CalendarData[];
    itemsWithMetadata: CalendarDataWithMetadata[];
}
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isDisabled` | `boolean` | Indicates whether the date is disabled. `true` means the date is inactive, and `false` means it is active |
| `isSelected` | `boolean` | Indicates whether the date is selected. `true` means the date is selected, and `false` means it is not. |
| `isToday` | `boolean` | Indicates whether the date represents today. `true` means the date is today, and `false` means it is not. |
| `items` | [`CalendarData`](CalendarData.md)[] | An array of basic data associated with the date. |
| `itemsWithMetadata` | [`CalendarDataWithMetadata`](./CalendarDataWithMetadata.md)[] | An array of data associated with the date, including additional metadata. |
