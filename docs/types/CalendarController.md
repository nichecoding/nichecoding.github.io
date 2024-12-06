***


# Type

```ts
type CalendarController = {
    nextPage: (options?: ImperativeOptions) => void;
    prevPage: (options?: ImperativeOptions) => void;
    setPage: (date: Date, options?: ImperativeOptions) => void;
}
```

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `nextPage` | ([`ImperativeOptions`](./ImperativeOptions.md)?) => `void` | Navigates to the next page in the calendar. |
| `prevPage` | ([`ImperativeOptions`](./ImperativeOptions.md)?) => `void` | Navigates to the previous page in the calendar. |
| `setPage` | (`Date`, [`ImperativeOptions`](./ImperativeOptions.md)?) => `void` | Sets the calendar to a specific page corresponding to the given date. |

