import styled from "styled-components";

interface ParentComponentProps {
  foo: VeryLargeUnionType; // Comment out this line to compare performance
}

const BaseComponent = (_props: ParentComponentProps) => {
  return <></>;
};

export const MyStyledComponent = styled(BaseComponent)`
  // Multiple template strings helps illustrate perf issue
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
  color: ${props => props.theme.waz};
`;

export const ParentComponent1 = styled.div`
  ${MyStyledComponent} {
    display: block;
  }
`;

export const ParentComponent2 = styled.div<{ waz: number }>`
  ${MyStyledComponent} {
    display: block;
  }

  color: ${props => props.waz};
`;

export const ErrorExample = (_props: ParentComponentProps) => {
  // Notice here ts thinks <ParentComponent> mistakenly needs the "foo" prop
  return (
    <>
      <ParentComponent1>test</ParentComponent1>
      <ParentComponent2 waz={42}>test</ParentComponent2>
    </>
  );
};

// @ts-ignore
type VeryLargeUnionType = "add-clip" | "add-column-left" | "add-column-right" | "add-location" | "add-row-bottom" | "add-row-top" | "add-to-artifact" | "add-to-folder" | "add" | "aimpoints-target" | "airplane" | "align-center" | "align-justify" | "align-left" | "align-right" | "alignment-bottom" | "alignment-horizontal-center" | "alignment-left" | "alignment-right" | "alignment-top" | "alignment-vertical-center" | "anchor" | "annotation" | "antenna" | "app-header" | "application" | "applications" | "archive" | "area-of-interest" | "array-boolean" | "array-date" | "array-floating-point" | "array-numeric" | "array-string" | "array-timestamp" | "array" | "arrow-bottom-left" | "arrow-bottom-right" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-top-left" | "arrow-top-right" | "arrow-up" | "arrows-horizontal" | "arrows-vertical" | "asterisk" | "at" | "automatic-updates" | "axle" | "backlink" | "badge" | "ban-circle" | "bank-account" | "barcode" | "blank" | "blocked-person" | "bold" | "book" | "bookmark" | "box" | "briefcase" | "bring-data" | "bug" | "buggy" | "build" | "calculator" | "calendar" | "camera" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "cargo-ship" | "cell-tower" | "changes" | "chart" | "chat" | "chevron-backward" | "chevron-down" | "chevron-forward" | "chevron-left" | "chevron-right" | "chevron-up" | "circle-arrow-down" | "circle-arrow-left" | "circle-arrow-right" | "circle-arrow-up" | "circle" | "citation" | "clean" | "clip" | "clipboard" | "cloud-download" | "cloud-upload" | "cloud" | "code-block" | "code" | "cog" | "collapse-all" | "color-fill" | "column-layout" | "comment" | "comparison" | "compass" | "compressed" | "confirm" | "console" | "contrast" | "control" | "credit-card" | "cross-circle" | "cross" | "crown" | "cube-add" | "cube-remove" | "cube" | "curved-range-chart" | "cut" | "cycle" | "dashboard" | "data-connection" | "data-lineage" | "database" | "delete" | "delta" | "derive-column" | "desktop" | "diagnosis" | "diagram-tree" | "direction-left" | "direction-right" | "disable" | "divide" | "document-open" | "document-share" | "document" | "dollar" | "dot" | "double-caret-horizontal" | "double-caret-vertical" | "double-chevron-down" | "double-chevron-left" | "double-chevron-right" | "double-chevron-up" | "doughnut-chart" | "download" | "drag-handle-horizontal" | "drag-handle-vertical" | "draw" | "drawer-left-filled" | "drawer-left" | "drawer-right-filled" | "drawer-right" | "drive-time" | "duplicate" | "edit" | "eject" | "emoji" | "endorsed" | "envelope" | "equals" | "eraser" | "error" | "euro" | "exchange" | "exclude-row" | "expand-all" | "export" | "eye-off" | "eye-on" | "eye-open" | "fast-backward" | "fast-forward" | "feed-subscribed" | "feed" | "film" | "filter-keep" | "filter-list" | "filter-open" | "filter-remove" | "filter" | "flag" | "flame" | "flash" | "floating-point" | "floppy-disk" | "flow-branch" | "flow-end" | "flow-linear" | "flow-review-branch" | "flow-review" | "flows" | "folder-close" | "folder-new" | "folder-open" | "folder-shared-open" | "folder-shared" | "follower" | "following" | "font" | "fork" | "form" | "fuel" | "full-circle" | "full-stacked-chart" | "fullscreen" | "function" | "gantt-chart" | "geofence" | "geolocation" | "geosearch" | "git-branch" | "git-commit" | "git-merge" | "git-new-branch" | "git-pull" | "git-push" | "git-repo" | "glass" | "globe-network" | "globe" | "graph-remove" | "graph" | "greater-than-or-equal-to" | "greater-than" | "grid-view" | "grid" | "group-objects" | "grouped-bar-chart" | "hand-down" | "hand-left" | "hand-right" | "hand-up" | "hand" | "hat" | "header-one" | "header-three" | "header-two" | "header" | "headset" | "heart-broken" | "heart" | "heat-grid" | "heatmap" | "helicopter" | "help" | "helper-management" | "high-priority" | "high-voltage-pole" | "highlight" | "history" | "home" | "horizontal-bar-chart-asc" | "horizontal-bar-chart-desc" | "horizontal-bar-chart" | "horizontal-distribution" | "horizontal-inbetween" | "hurricane" | "id-number" | "image-rotate-left" | "image-rotate-right" | "import" | "inbox-filtered" | "inbox-geo" | "inbox-search" | "inbox-update" | "inbox" | "info-sign" | "inheritance" | "inherited-group" | "inner-join" | "insert" | "intelligence" | "intersection" | "ip-address" | "issue-closed" | "issue-new" | "issue" | "italic" | "join-table" | "key-backspace" | "key-command" | "key-control" | "key-delete" | "key-enter" | "key-escape" | "key-option" | "key-shift" | "key-tab" | "key" | "known-vehicle" | "lab-test" | "label" | "layer-outline" | "layer" | "layers" | "layout-auto" | "layout-balloon" | "layout-circle" | "layout-grid" | "layout-group-by" | "layout-hierarchy" | "layout-linear" | "layout-skew-grid" | "layout-sorted-clusters" | "layout" | "learning" | "left-join" | "less-than-or-equal-to" | "less-than" | "lifesaver" | "lightbulb" | "lightning" | "link" | "list-columns" | "list-detail-view" | "list" | "locate" | "lock" | "locomotive" | "log-in" | "log-out" | "low-voltage-pole" | "manual" | "manually-entered-data" | "many-to-many" | "many-to-one" | "map-create" | "map-marker" | "map" | "maximize" | "media" | "menu-closed" | "menu-open" | "menu" | "merge-columns" | "merge-links" | "minimize" | "minus" | "mobile-phone" | "mobile-video" | "modal-filled" | "modal" | "model" | "moon" | "more" | "mountain" | "move" | "mugshot" | "multi-select" | "music" | "nest" | "new-drawing" | "new-grid-item" | "new-layer" | "new-layers" | "new-link" | "new-object" | "new-person" | "new-prescription" | "new-text-box" | "ninja" | "not-equal-to" | "notifications-snooze" | "notifications-updated" | "notifications" | "numbered-list" | "numerical" | "office" | "offline" | "oil-field" | "one-column" | "one-to-many" | "one-to-one" | "open-application" | "outdated" | "page-layout" | "panel-stats" | "panel-table" | "paperclip" | "paragraph" | "path-search" | "path" | "pause" | "people" | "percentage" | "person" | "phone" | "pie-chart" | "pin" | "pivot-table" | "pivot" | "play" | "playbook" | "plus" | "polygon-filter" | "power" | "predictive-analysis" | "prescription" | "presentation" | "print" | "projects" | "properties" | "property" | "publish-function" | "pulse" | "rain" | "random" | "record" | "rect-height" | "rect-width" | "rectangle" | "redo" | "refresh" | "regex" | "regression-chart" | "remove-column-left" | "remove-column-right" | "remove-column" | "remove-row-bottom" | "remove-row-top" | "remove" | "repeat" | "reset" | "resolve" | "rig" | "right-join" | "ring" | "rocket-slant" | "rocket" | "rotate-document" | "rotate-page" | "route" | "satellite" | "saved" | "scatter-plot" | "search-around" | "search-template" | "search-text" | "search" | "segmented-control" | "select" | "selection" | "send-message" | "send-to-graph" | "send-to-map" | "send-to" | "sensor" | "series-add" | "series-configuration" | "series-derived" | "series-filtered" | "series-search" | "settings" | "shapes" | "share" | "shared-filter" | "shield" | "ship" | "shop" | "shopping-cart" | "signal-search" | "sim-card" | "slash" | "small-cross" | "small-info-sign" | "small-minus" | "small-plus" | "small-square" | "small-tick" | "snowflake" | "social-media" | "sort-alphabetical-desc" | "sort-alphabetical" | "sort-asc" | "sort-desc" | "sort-numerical-desc" | "sort-numerical" | "sort" | "split-columns" | "square" | "stacked-chart" | "stadium-geometry" | "star-empty" | "star" | "step-backward" | "step-chart" | "step-forward" | "stop" | "stopwatch" | "strikethrough" | "style" | "subscript" | "superscript" | "swap-horizontal" | "swap-vertical" | "switch" | "symbol-circle" | "symbol-cross" | "symbol-diamond" | "symbol-rectangle" | "symbol-square" | "symbol-triangle-down" | "symbol-triangle-up" | "syringe" | "tag" | "take-action" | "tank" | "target" | "taxi" | "temperature" | "text-highlight" | "th-derived" | "th-disconnect" | "th-filtered" | "th-list" | "th" | "third-party" | "thumbs-down" | "thumbs-up" | "tick-circle" | "tick" | "time" | "timeline-area-chart" | "timeline-bar-chart" | "timeline-events" | "timeline-line-chart" | "tint" | "torch" | "tractor" | "train" | "translate" | "trash" | "tree" | "trending-down" | "trending-up" | "truck" | "two-columns" | "unarchive" | "underline" | "undo" | "ungroup-objects" | "unknown-vehicle" | "unlock" | "unpin" | "unresolve" | "updated" | "upload" | "user" | "variable" | "vertical-bar-chart-asc" | "vertical-bar-chart-desc" | "vertical-distribution" | "vertical-inbetween" | "video" | "virus" | "volume-down" | "volume-off" | "volume-up" | "walk" | "warning-sign" | "waterfall-chart" | "waves" | "widget-button" | "widget-footer" | "widget-header" | "widget" | "wind" | "wrench" | "zoom-in" | "zoom-out" | "zoom-to-fit";
