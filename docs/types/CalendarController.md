***


# Type

```ts
type CalendarController = {
    goToPrevPage: (options?: ImperativeOptions) => void;
    goToNextPage: (options?: ImperativeOptions) => void;
    goToDatePage: (date: Date, options?: ImperativeOptions) => void;
}
```

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `goToPrevPage` | ([`ImperativeOptions`](./ImperativeOptions.md)?) => `void` | Navigates to the next page in the calendar. |
| `goToNextPage` | ([`ImperativeOptions`](./ImperativeOptions.md)?) => `void` | Navigates to the previous page in the calendar. |
| `goToDatePage` | (`Date`, [`ImperativeOptions`](./ImperativeOptions.md)?) => `void` | Sets the calendar to a specific page corresponding to the given date. |

