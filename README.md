Emitted declaration files end up very large because HTML props are explicitly listed instead of referencing the `FastOmit` type.  This causes a huge performance loss due to larger `.d.ts` files needing to be written, as well as a much larger file size.

1. Run `npm install`
2. Run `npx tsc --build -f --diagnostics`
3. Open `lib/test.d.ts`

Expected:
  ```ts
export declare const MyStyledDialog: IStyledComponent<
    "web",
    FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>
>
    & ((props: DialogProps) => JSX.Element);
```

Actual:
  ```ts
export declare const MyStyledDialog: IStyledComponent<
    "web",
    {
        foo: number;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        ... 254 more ...
        onTransitionEndCapture?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    }
>
    & ((props: DialogProps) => JSX.Element);
>;
  ```
