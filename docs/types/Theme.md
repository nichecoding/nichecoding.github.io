***

## Interface
```ts
export interface Theme {
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    dayContainerStyle?: StyleProp<ViewStyle>;
    daySelectedStyle?: StyleProp<ViewStyle>;
    dayNumberStyle?: StyleProp<ViewStyle>;
    dayNumberTextStyle?: StyleProp<TextStyle>;
    dayTodayStyle?: StyleProp<ViewStyle>;
    dayTodayTextStyle?: StyleProp<TextStyle>;
    dayItemStyle?: StyleProp<ViewStyle>;
    dayItemTextStyle?: StyleProp<TextStyle>;
    itemStartMargin?: number;
    itemStartBorderRadius?: number;
    itemEndMargin?: number;
    itemEndBorderRadius?: number;
    dayTextForamt?: string;
    disableOpacity?: number;
    headerStyle?: StyleProp<ViewStyle>;
    headerTextStyle?: StyleProp<TextStyle>;
    headerDateFormat?: string;
    dayLabelDateFormat?: string;
}
```

## Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `style?` | `StyleProp`\<`ViewStyle`\> |  | The style for the main calendar container. |
| `containerStyle?` | `StyleProp`\<`ViewStyle`\> |  | The style for the overall container of the calendar. |
| `dayContainerStyle?` | `StyleProp`\<`ViewStyle`\> |  | The style for the container of each day. |
| `dayItemStyle?` | `StyleProp`\<`ViewStyle`\> |  | The style for the container of day items (events). |
| `dayItemTextStyle?` | `StyleProp`\<`TextStyle`\> |  | The style for the text of day items (events). |
| `dayLabelDateFormat?` | `string` | `eeeeee` | The date format used for the day label. |
| `dayNumberStyle?` | `StyleProp`\<`ViewStyle`\> |  | The style for the container of the day number. |
| `dayNumberTextStyle?` | `StyleProp`\<`TextStyle`\> |  | The style for the text of the day number. |
| `daySelectedStyle?` | `StyleProp`\<`ViewStyle`\> | `{ backgroundColor: 'rgb(216, 216, 216)' }` | The style for the selected day. |
| `dayTextForamt?` | `string` | `d` | The format used for day text. |
| `dayTodayStyle?` | `StyleProp`\<`ViewStyle`\> | `{ backgroundColor: 'purple', borderRadius: 20 }` | The style for the container of today's day. |
| `dayTodayTextStyle?` | `StyleProp`\<`TextStyle`\> | `{ color: 'white' }` | The style for the text of today's day. |
| `disableOpacity?` | `number` | `0.2` | The opacity when the date is disabled. |
| `headerDateFormat?` | `string` | `MMMM yyyy` | The date format used in the header. |
| `headerStyle?` | `StyleProp`\<`ViewStyle`\> |  | The style for the container of header. |
| `headerTextStyle?` | `StyleProp`\<`TextStyle`\> |  | The style for the text of header. |
| `itemEndBorderRadius?` | `number` | `4` | The border radius for the ending item (event). |
| `itemEndMargin?` | `number` | `2` | The margin for the ending item (event). |
| `itemStartBorderRadius?` | `number` | `4` | The border radius for the starting item (event). |
| `itemStartMargin?` | `number` | `2` | The margin for the starting item (event). |
