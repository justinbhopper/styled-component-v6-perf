Emitted declaration files end up very large because HTML props are explicitly listed instead of the original types being referenced.  This causes a huge performance loss due to larger `.d.ts` files needing to be written, as well as a much larger file size.

1. Run `npm install`
2. Run `npx tsc --build -f --diagnostics`
3. Open `lib/test.d.ts`

Expected:
  ```ts
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    foo: number;
}
export declare const MyStyledDialog: IStyledComponent<"web", DialogProps>
  & ((props: DialogProps) => JSX.Element);

  ```
  Actual:
  ```ts
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    foo: number;
}
export declare const MyStyledDialog: IStyledComponent<"web", {
    foo: number;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    ... 254 more ...
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLDivElement> | undefined;
}> & ((props: DialogProps) => JSX.Element);
>;
  ```

#

To compare with styled-components v5, update `package.json` with

- `"styled-components": "5.3.6"`
- `"@types/styled-components": "5.1.34"`
