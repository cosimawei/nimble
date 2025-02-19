# Change Log - @ni/nimble-components

This log was last generated on Fri, 23 Feb 2024 22:56:07 GMT and should not be manually modified.

<!-- Start content -->

## 21.6.7

Fri, 23 Feb 2024 22:56:07 GMT

### Patches

- Fix bug in Firefox where title on spinner isn't always displayed as expected ([ni/nimble@1e5b10c](https://github.com/ni/nimble/commit/1e5b10c7a247e13dcece70496b5ccbae322075a3))

## 21.6.6

Fri, 23 Feb 2024 22:17:56 GMT

### Patches

- Fix spacing between error text and component ([ni/nimble@c6e803c](https://github.com/ni/nimble/commit/c6e803caaa9757f7584281f096a94c4d58ef194d))

## 21.6.5

Fri, 23 Feb 2024 21:23:18 GMT

### Patches

- Only handle close events coming from dialog element ([ni/nimble@c1f4f8f](https://github.com/ni/nimble/commit/c1f4f8fb9bbb889608f1d2930f7a29d55fa31c79))

## 21.6.4

Fri, 23 Feb 2024 00:08:44 GMT

### Patches

- Tweak card to workaround lighthouse issue ([ni/nimble@b677d6b](https://github.com/ni/nimble/commit/b677d6b9ed7451715bb36043b245369060c8511b))

## 21.6.3

Thu, 22 Feb 2024 19:42:35 GMT

### Patches

- Clean up dialog/drawer properly if cancel event skipped ([ni/nimble@70e9234](https://github.com/ni/nimble/commit/70e9234b636b0a2e67a658ecef06008ac8e96fa2))

## 21.6.2

Thu, 22 Feb 2024 01:13:03 GMT

### Patches

- Bump @ni/nimble-tokens to v6.11.1

## 21.6.1

Wed, 21 Feb 2024 23:32:45 GMT

### Patches

- Update `TableRecordDelayedHierarchyState` enum values to follow kebab casing convention ([ni/nimble@ff99d91](https://github.com/ni/nimble/commit/ff99d91bbe3dd65e8595770c9ac05cbb8ad5282d))

## 21.6.0

Wed, 21 Feb 2024 21:18:20 GMT

### Minor changes

- Add bodyEmphasizedPlus1Font tokens ([ni/nimble@4037b7c](https://github.com/ni/nimble/commit/4037b7c13da51926e6fbfd774a4da19cd75cb98e))
- Bump @ni/nimble-tokens to v6.11.0

## 21.5.5

Wed, 21 Feb 2024 19:48:20 GMT

### Patches

- Bump @ni/jasmine-parameterized to v0.2.2

## 21.5.4

Tue, 20 Feb 2024 17:54:12 GMT

### Patches

- Fix bug where nesting level of rows sometimes gets out of sync with data ([ni/nimble@c6c16de](https://github.com/ni/nimble/commit/c6c16de04b8387dbb999c62fbc3f35a2b3643427))

## 21.5.3

Mon, 19 Feb 2024 22:25:59 GMT

### Patches

- Fix bug where setting underline-hidden=false on the anchor column would sometimes still hide the underline ([ni/nimble@28825d1](https://github.com/ni/nimble/commit/28825d16c421175868f88992be64874e0d74b655))

## 21.5.2

Mon, 19 Feb 2024 19:14:51 GMT

### Patches

- Allow a row with a state of `canLoadChildren` to be expanded when it does not have children ([ni/nimble@15a30c5](https://github.com/ni/nimble/commit/15a30c5a9c04fae9c3f6d2eadb0b31056c87db56))

## 21.5.1

Fri, 16 Feb 2024 18:10:59 GMT

### Patches

- Inline sources into map files ([ni/nimble@2b6c327](https://github.com/ni/nimble/commit/2b6c327fd3bc4f49178ac370f695a8b941278c46))
- Bump @ni/nimble-tokens to v6.10.1

## 21.5.0

Thu, 15 Feb 2024 20:48:52 GMT

### Minor changes

- Adding filter input to Select ([ni/nimble@f2ecb4e](https://github.com/ni/nimble/commit/f2ecb4e69a8c9569d9e19cacfa0533b8b170b3f9))

## 21.4.0

Wed, 14 Feb 2024 21:03:17 GMT

### Minor changes

- Add `loadingChildren` delayed hierarchy state ([ni/nimble@b3fc70e](https://github.com/ni/nimble/commit/b3fc70ec6857d24fcc257eeab7697ac89c663a55))

## 21.3.3

Tue, 13 Feb 2024 21:22:58 GMT

### Patches

- Fix performance issue for table with many grouped columns ([ni/nimble@0180d30](https://github.com/ni/nimble/commit/0180d30c8833d50eb529794c362cc476f305f88d))

## 21.3.2

Tue, 13 Feb 2024 17:44:00 GMT

### Patches

- Update dependency on Tiptap extensions to fix mention issue in rich text editor ([ni/nimble@34efe55](https://github.com/ni/nimble/commit/34efe55087a58bb99e4aa42873512946164b47d2))

## 21.3.1

Fri, 09 Feb 2024 02:02:53 GMT

### Patches

- Update Storybook to 7.6.13 ([ni/nimble@e68df6d](https://github.com/ni/nimble/commit/e68df6d348dcaa664e87db35725f9d30f2d2dca5))

## 21.3.0

Wed, 07 Feb 2024 21:48:45 GMT

### Minor changes

- Extend nimble-table API to allow specifying that a record has children that can be loaded when the row is expanded ([ni/nimble@8d58b01](https://github.com/ni/nimble/commit/8d58b0180a3fb2c5a837718a6da3489b67d821bc))

## 21.2.1

Wed, 07 Feb 2024 19:06:22 GMT

### Patches

- fixed wafer map component test warnings ([ni/nimble@9fdd20d](https://github.com/ni/nimble/commit/9fdd20db5366e435fc4576d5a4881959fa143e30))

## 21.2.0

Fri, 02 Feb 2024 21:51:03 GMT

### Minor changes

- New pause, play, stop, and external link icons. Updated running-arrow icon. ([ni/nimble@8ba4f05](https://github.com/ni/nimble/commit/8ba4f05ec0bd828265d2f74b16a278adf46db268))
- Bump @ni/nimble-tokens to v6.10.0

## 21.1.0

Wed, 31 Jan 2024 20:22:58 GMT

### Minor changes

- Export new NumberTextUnitFormat and update documentation for new Angular number formatting pipe and existing duration pipe ([ni/nimble@bf9013d](https://github.com/ni/nimble/commit/bf9013d5cb92106ddd1fcf6fd84e6684930462b8))

## 21.0.5

Mon, 29 Jan 2024 11:31:46 GMT

### Patches

- Add validator, tracker and batch updates in rich text components for mention configuration ([ni/nimble@ec2e0dd](https://github.com/ni/nimble/commit/ec2e0ddef1d910d44097ccb2a976ad2343dbac63))

## 21.0.4

Thu, 25 Jan 2024 02:58:12 GMT

### Patches

- Pin fast-foundation version to avoid regression ([ni/nimble@d3f330a](https://github.com/ni/nimble/commit/d3f330a41625cfb3be92eff8fd150f4cac5e11e1))

## 21.0.3

Wed, 24 Jan 2024 00:18:26 GMT

### Patches

- Fix bug where table rows are not rendered correctly when the table is reattached to the DOM ([ni/nimble@c3ba509](https://github.com/ni/nimble/commit/c3ba50940c9aa158b21f6c0d78056985f4a7c1c0))

## 21.0.2

Tue, 23 Jan 2024 22:00:33 GMT

### Patches

- Bump @ni/jasmine-parameterized to v0.2.1

## 21.0.1

Tue, 23 Jan 2024 16:01:09 GMT

### Patches

- Bump @ni/jasmine-parameterized to v0.2.0

## 21.0.0

Fri, 19 Jan 2024 22:22:02 GMT

### Major changes

- Introducing data hierarchy to table. Renamed 'groupCollapseAll' on the table label provider to 'collapseAll'. ([ni/nimble@398b7ab](https://github.com/ni/nimble/commit/398b7ab7e2be2597de26e15e0ee463df4a02f228))

## 20.18.1

Thu, 18 Jan 2024 17:21:22 GMT

### Patches

- Unify unit scale types to single pattern ([ni/nimble@76dff67](https://github.com/ni/nimble/commit/76dff67e47387c2f938a324798f3ca29442360ec))

## 20.18.0

Wed, 17 Jan 2024 14:23:42 GMT

### Minor changes

- Unit support for number-text table column ([ni/nimble@3710e7e](https://github.com/ni/nimble/commit/3710e7e150786220099816fdea608b10b378956c))

## 20.17.7

Wed, 17 Jan 2024 00:48:57 GMT

### Patches

- Visual design improvements for rich text editor ([ni/nimble@4e5d877](https://github.com/ni/nimble/commit/4e5d8771d3f06c03245638b2cde54b00eaa27d60))

## 20.17.6

Tue, 16 Jan 2024 21:49:14 GMT

### Patches

- Fix disabled styling of tree items ([ni/nimble@1596be3](https://github.com/ni/nimble/commit/1596be39b8d3b495a2de713b0c0b3f355bf77897))

## 20.17.5

Tue, 16 Jan 2024 21:01:12 GMT

### Patches

- Make lifecycle callbacks in components call base class consistently ([ni/nimble@87f54f7](https://github.com/ni/nimble/commit/87f54f799117992b88b3b03c258d3d242e16bc34))

## 20.17.4

Wed, 10 Jan 2024 13:47:05 GMT

### Patches

- Removed disable-editing attribute from the rich text mention users view component for rendering @mention in editor and viewer ([ni/nimble@98c97d4](https://github.com/ni/nimble/commit/98c97d44a092e9fbbfe7710f381da77fe73ada1a))

## 20.17.3

Mon, 08 Jan 2024 17:18:14 GMT

### Patches

- Export tag names as literals to improve type inferencing ([ni/nimble@f45fdf7](https://github.com/ni/nimble/commit/f45fdf7826fb528ee131ace1802a02e94a8db411))

## 20.17.2

Fri, 05 Jan 2024 14:50:44 GMT

### Patches

- Add fix to retain rich text editor format button state when user configuration gets dynamically updated ([ni/nimble@8501f8f](https://github.com/ni/nimble/commit/8501f8f3c8283cb79926422aec253a967e5a9755))

## 20.17.1

Fri, 05 Jan 2024 00:37:04 GMT

### Patches

- Create enum for z-index values ([ni/nimble@fc2fd87](https://github.com/ni/nimble/commit/fc2fd8701eb880b1fad3bb7af641380311129fba))

## 20.17.0

Thu, 04 Jan 2024 21:21:59 GMT

### Minor changes

- - Update all tests to use `parameterizeNamedList` and delete deprecated `getSpecTypeByNamedList` function.
- Update functions in the table page object and table validator to have `readonly` arrays as the parameters. ([ni/nimble@85b29ec](https://github.com/ni/nimble/commit/85b29ec1836a8bb00b51797c42e4f4cfa058accb))

## 20.16.6

Thu, 04 Jan 2024 19:22:21 GMT

### Patches

- Rich text editor fix for Safari browser issue in removing the suggestion text when pressing backspace ([ni/nimble@94f26ce](https://github.com/ni/nimble/commit/94f26ce2738e984870c6840fdc9557eff6e2b08f))

## 20.16.5

Thu, 04 Jan 2024 16:50:24 GMT

### Patches

- Upgrade dependencies ([ni/nimble@341146c](https://github.com/ni/nimble/commit/341146ceef057386cea20419277073bd793270ef))
- Bump @ni/nimble-tokens to v6.9.1

## 20.16.4

Fri, 15 Dec 2023 14:08:18 GMT

### Patches

- Fix mention listbox when configuration dynamically changes and when cursor position change ([ni/nimble@abdb902](https://github.com/ni/nimble/commit/abdb902d39db785ec45d4aa14a9e9ce988a5d388))

## 20.16.3

Wed, 13 Dec 2023 14:06:08 GMT

### Patches

- Add support for @mention in nimble-rich-text-editor ([ni/nimble@c69a774](https://github.com/ni/nimble/commit/c69a7745d0a8223a479d79a2cabe6cdcd1e9ca1a))

## 20.16.2

Wed, 13 Dec 2023 13:27:41 GMT

### Patches

- Adding tags option to wafermap dies and ability to highlight dies based on tags using highlightedTags. Breaking change as users should switch from the removed highlightedValues property to the highlightedTags feature ([ni/nimble@faec5a4](https://github.com/ni/nimble/commit/faec5a459b8c93b2e5c05722e767fb8331d65857))

## 20.16.1

Mon, 11 Dec 2023 19:32:21 GMT

### Patches

- Make anchor behave like native anchor when contenteditable ([ni/nimble@487c344](https://github.com/ni/nimble/commit/487c3440588f7b331ea2e90131e41bbf4d4d84f0))

## 20.16.0

Mon, 11 Dec 2023 17:36:28 GMT

### Minor changes

- Add expand-collapse button to Table Row and Cell ([ni/nimble@824e321](https://github.com/ni/nimble/commit/824e321a9235b0bb98b1fd49e1167d154749a08d))

## 20.15.1

Thu, 07 Dec 2023 21:49:16 GMT

### Patches

- Add support for @mention in nimble-rich-text-editor ([ni/nimble@c69a774](https://github.com/ni/nimble/commit/c69a7745d0a8223a479d79a2cabe6cdcd1e9ca1a))

## 20.15.0

Thu, 07 Dec 2023 17:27:04 GMT

### Minor changes

- New icons for calendars and test plans ([ni/nimble@f4a4453](https://github.com/ni/nimble/commit/f4a4453cc34b004f34d4ffed5a9c674427560597))
- Bump @ni/nimble-tokens to v6.9.0

## 20.14.13

Tue, 05 Dec 2023 11:06:30 GMT

### Patches

- spec for wafer highlight ([ni/nimble@83fa07f](https://github.com/ni/nimble/commit/83fa07f9caf7ec7aca9d7eef9a45bf93c7f13b26))

## 20.14.12

Mon, 04 Dec 2023 21:56:42 GMT

### Patches

- Update styling for incubating nimble-card ([ni/nimble@499b7e1](https://github.com/ni/nimble/commit/499b7e19fe8ddd6627cd36bae402b8c18a6feb10))

## 20.14.11

Tue, 28 Nov 2023 18:24:15 GMT

### Patches

- Add explicit dev dependency on source-map-loader ([ni/nimble@bf12590](https://github.com/ni/nimble/commit/bf1259004b9d362f0d04fa52695b0d430805cf99))

## 20.14.10

Mon, 27 Nov 2023 16:11:51 GMT

### Patches

- Fix overflow behavior of nimble-list-option ([ni/nimble@9047cd3](https://github.com/ni/nimble/commit/9047cd3f1c559b54f58d7bd9a4e3cf3ff401c0fb))

## 20.14.9

Thu, 23 Nov 2023 08:11:47 GMT

### Patches

- Add support for @mention in nimble-rich-text-viewer ([ni/nimble@c69a774](https://github.com/ni/nimble/commit/c69a7745d0a8223a479d79a2cabe6cdcd1e9ca1a))

## 20.14.8

Tue, 21 Nov 2023 19:16:40 GMT

### Patches

- Hide inc/dec buttons on numeric from a11y tree ([ni/nimble@f74e259](https://github.com/ni/nimble/commit/f74e2591ec02b4a60c873e9308f82ad96ca51f40))

## 20.14.7

Tue, 21 Nov 2023 17:02:30 GMT

### Patches

- Introduce table hierarchical datatype. ([ni/nimble@d268abf](https://github.com/ni/nimble/commit/d268abf77bd76a1fe7e707542f391e5bb4367291))

## 20.14.6

Fri, 17 Nov 2023 16:02:19 GMT

### Patches

- Add configuration component for rich text @mention support ([ni/nimble@045bb0a](https://github.com/ni/nimble/commit/045bb0a6749a64df4af2b28da161b79802c5f12b))

## 20.14.5

Fri, 17 Nov 2023 01:11:32 GMT

### Patches

- Fix the drawer's footer's border to match the visual design spec ([ni/nimble@ad97540](https://github.com/ni/nimble/commit/ad97540875589785cfce251af5213237ecf5778a))

## 20.14.4

Wed, 15 Nov 2023 16:52:07 GMT

### Patches

- Update internal mapping base class to be generic ([ni/nimble@1eea68e](https://github.com/ni/nimble/commit/1eea68e85e2c284cd4ebad9b910ea57c5b3f929b))

## 20.14.3

Mon, 13 Nov 2023 17:03:21 GMT

### Patches

- Nimble rich text mention users view component bring up ([ni/nimble@fac3e07](https://github.com/ni/nimble/commit/fac3e07a393880edccb9061778a15ba5e7597fcb))

## 20.14.2

Sat, 11 Nov 2023 11:03:03 GMT

### Patches

- Nimble list box component bring up ([ni/nimble@176130f](https://github.com/ni/nimble/commit/176130fee88b376f76c86b20294e9e44cca0c42f))

## 20.14.1

Wed, 08 Nov 2023 16:07:09 GMT

### Patches

- Workaround for Lighthouse accessibility error in nimble-card. Update Angular status of nimble-card component. ([ni/nimble@57ee0e9](https://github.com/ni/nimble/commit/57ee0e95855887e10034232f587be2e666c96414))

## 20.14.0

Fri, 03 Nov 2023 23:30:50 GMT

### Minor changes

- Expose width and height of nimble-dialog & add tokens ([ni/nimble@5207a2a](https://github.com/ni/nimble/commit/5207a2a24f7d383057b56a91add96e00e5c36d39))

## 20.13.0

Thu, 02 Nov 2023 18:26:57 GMT

### Minor changes

- New icons for "move in" and "move out" ([ni/nimble@91d75d9](https://github.com/ni/nimble/commit/91d75d9c7ce2f493b3ac69fefd5457ae3b83d3f9))
- Bump @ni/nimble-tokens to v6.8.0

### Patches

- Update fast-foundation dependency ([ni/nimble@6f571be](https://github.com/ni/nimble/commit/6f571beaf840af895e5561765ce3fd1500c50c80))

## 20.12.1

Thu, 02 Nov 2023 17:33:16 GMT

### Patches

- Add a title slot to the nimble-card ([ni/nimble@67a2e37](https://github.com/ni/nimble/commit/67a2e37033905d15c8f779b2f1c553d9b4e3cedb))

## 20.12.0

Wed, 01 Nov 2023 20:45:20 GMT

### Minor changes

- New icon for @mention ([ni/nimble@5a8fe73](https://github.com/ni/nimble/commit/5a8fe731b494042bc8a5cf060338a05208e1075d))
- Bump @ni/nimble-tokens to v6.7.0

## 20.11.0

Wed, 01 Nov 2023 16:39:22 GMT

### Minor changes

- Add an incubating `nimble-card` component ([ni/nimble@0049146](https://github.com/ni/nimble/commit/0049146975bb1b131394e2891fdafd40168d3ea4))

## 20.10.3

Wed, 01 Nov 2023 15:14:29 GMT

### Patches

- Update dependency @types/markdown-it to v13 ([ni/nimble@419b889](https://github.com/ni/nimble/commit/419b88960e85b0c666e7cbc57f0b78f712e2e5d4))

## 20.10.2

Thu, 26 Oct 2023 18:19:11 GMT

### Patches

- Update dependencies on tanstack ([ni/nimble@7a9a966](https://github.com/ni/nimble/commit/7a9a966fd9e37713e95ea9c7574e621e2df38b33))

## 20.10.1

Thu, 26 Oct 2023 00:29:31 GMT

### Patches

- Add duration table column to all-components bundle ([ni/nimble@244e2ca](https://github.com/ni/nimble/commit/244e2caca0117fae6448f7c130e3afd3771b03d5))

## 20.10.0

Mon, 23 Oct 2023 14:17:52 GMT

### Minor changes

- Add icon for Save As ([ni/nimble@62016ff](https://github.com/ni/nimble/commit/62016ff5a313a4c35f7850a2a4261251ceda51e0))
- Bump @ni/nimble-tokens to v6.6.0

## 20.9.0

Thu, 19 Oct 2023 23:50:56 GMT

### Minor changes

- Add decimal-maximum-digits attr to number-text column ([ni/nimble@466d474](https://github.com/ni/nimble/commit/466d474d52d3eb8a0396a6e53365e32bfbbd2954))

## 20.8.0

Thu, 19 Oct 2023 15:08:49 GMT

### Minor changes

- Table Duration Column ([ni/nimble@f80db0b](https://github.com/ni/nimble/commit/f80db0b9334a11d4c76a57b0cc4850cea300f950))

## 20.7.0

Wed, 18 Oct 2023 18:51:54 GMT

### Minor changes

- add ni and systemlink logo icons ([ni/nimble@2a79981](https://github.com/ni/nimble/commit/2a799815ee5117c3cf863fc522333497e50ff355))
- Bump @ni/nimble-tokens to v6.5.0

## 20.6.3

Mon, 16 Oct 2023 21:31:42 GMT

### Patches

- Update TypeScript dependency to 4.8 ([ni/nimble@8a42916](https://github.com/ni/nimble/commit/8a429164d4987cc1b932adb3c93727afdc8c5202))
- Bump @ni/nimble-tokens to v6.4.1

## 20.6.2

Wed, 04 Oct 2023 07:38:20 GMT

### Patches

- Flipped the vertical scale and created wafer map mocks for tests ([ni/nimble@7063d3d](https://github.com/ni/nimble/commit/7063d3d5ae3d1b5e9e4d3e5952d10436b29788f4))

## 20.6.1

Tue, 03 Oct 2023 14:34:50 GMT

### Patches

- Column resize bug fix. ([ni/nimble@2c1247b](https://github.com/ni/nimble/commit/2c1247b7a9c46d7e10b36b9a53f3cff346e8d0d5))

## 20.6.0

Thu, 28 Sep 2023 22:20:40 GMT

### Minor changes

- Hide icons from accessibility tree by default ([ni/nimble@2b87882](https://github.com/ni/nimble/commit/2b8788206af0718623968a736ab30cb8ec8766da))

## 20.5.5

Thu, 28 Sep 2023 03:38:31 GMT

### Patches

- Support for pasting a hyperlink as an absolute link in the rich text editor ([ni/nimble@3d5285d](https://github.com/ni/nimble/commit/3d5285dc230dc7d5c859d948993b67788e57365a))

## 20.5.4

Tue, 26 Sep 2023 21:18:40 GMT

### Patches

- Fix bug where `undefined` and `null` were not sorted correctly when using the `basic` sort operation ([ni/nimble@d952598](https://github.com/ni/nimble/commit/d952598e0f68a4c7255c5c3aab818035002f7600))

## 20.5.3

Fri, 22 Sep 2023 14:24:47 GMT

### Patches

- Add reusable css for styling an element as visually hidden while keeping it available to the accessibility tree ([ni/nimble@8486724](https://github.com/ni/nimble/commit/8486724cf68c66210de0a180496e75b347391352))

## 20.5.2

Fri, 22 Sep 2023 00:01:31 GMT

### Patches

- Clean-up dist folder of nimble-components to remove duplicated type hierarchy ([ni/nimble@908204e](https://github.com/ni/nimble/commit/908204e252ee75affeedc355a46d13a3005d6770))

## 20.5.1

Thu, 21 Sep 2023 13:07:38 GMT

### Patches

- Avoid converting markdown syntax characters like star (*) and underscore(_) to format the editor content automatically while typing ([ni/nimble@94188a3](https://github.com/ni/nimble/commit/94188a36031bfd9a88374d9e201c695eab8727ae))

## 20.5.0

Wed, 20 Sep 2023 18:55:59 GMT

### Minor changes

- New icons for indent and outdent list level ([ni/nimble@f12cbc5](https://github.com/ni/nimble/commit/f12cbc59d683ae048a85750990cc4ae174464590))
- Bump @ni/nimble-tokens to v6.4.0

## 20.4.3

Wed, 20 Sep 2023 16:38:20 GMT

### Patches

- Add additional localized labels to sub-elements in the table to improve accessibility ([ni/nimble@60947ef](https://github.com/ni/nimble/commit/60947ef38e170552c614f1affcd8e1e385ba9177))

## 20.4.2

Wed, 20 Sep 2023 15:22:26 GMT

### Patches

- Fix bug in table when reordering columns ([ni/nimble@f4dc2ea](https://github.com/ni/nimble/commit/f4dc2eaa9724bee9cf82c28d17ac57422679a1f8))

## 20.4.1

Wed, 20 Sep 2023 02:57:31 GMT

### Patches

- Fixes keyboard closing when rich-text editor toolbar buttons are clicked in mobile iOS browsers ([ni/nimble@36b9611](https://github.com/ni/nimble/commit/36b9611c258f1b5e6aa5d24dc5ca288327382348))

## 20.4.0

Tue, 19 Sep 2023 23:12:45 GMT

### Minor changes

- Add medium padding token and document size ramp ([ni/nimble@b6baa04](https://github.com/ni/nimble/commit/b6baa04c34007f4fad4e546c78505fa820fff6d1))

## 20.3.2

Fri, 15 Sep 2023 21:18:04 GMT

### Patches

- Shift/Ctrl/Cmd + Enter will add line break in editor ([ni/nimble@129af80](https://github.com/ni/nimble/commit/129af8084eab1d47df84d6ee7281fd28bbaef8ec))

## 20.3.1

Fri, 15 Sep 2023 20:36:47 GMT

### Patches

- Import number-text column in all-components.ts ([ni/nimble@2a98738](https://github.com/ni/nimble/commit/2a987381442f5076ea40ea8e60010e2a839bca5a))

## 20.3.0

Fri, 15 Sep 2023 14:38:16 GMT

### Minor changes

- Add partial token for fill hover color ([ni/nimble@b03b880](https://github.com/ni/nimble/commit/b03b880ff881d7046209e59cf4a9cbf74e2fcceb))

## 20.2.16

Thu, 14 Sep 2023 19:53:56 GMT

### Patches

- Remove unexpected whitespace at start/end of anchor ([ni/nimble@b73a610](https://github.com/ni/nimble/commit/b73a610e56ae33783ad662354ef28ef80ab38f70))

## 20.2.15

Thu, 14 Sep 2023 17:13:47 GMT

### Patches

- Support for absolute links in rich text components ([ni/nimble@f5dfad6](https://github.com/ni/nimble/commit/f5dfad6fbce2701e9fabab100c7e4ebf17e61f50))

## 20.2.14

Thu, 14 Sep 2023 13:22:30 GMT

### Patches

- Mixed bold and italics formatting corner cases fixed. Update dependency on prosemirror-markdown ([ni/nimble@e505291](https://github.com/ni/nimble/commit/e50529159ae06c89b97e270f459b7f6095721bb1))

## 20.2.13

Wed, 13 Sep 2023 20:54:15 GMT

### Patches

- Created new grid dimensions api for the wafer map component ([ni/nimble@6bb30f5](https://github.com/ni/nimble/commit/6bb30f55e68c85eac7225ee430920b0729c3feeb))

## 20.2.12

Wed, 13 Sep 2023 15:39:27 GMT

### Patches

- Remove roundToInteger format from number-text column ([ni/nimble@f442767](https://github.com/ni/nimble/commit/f4427670abfdc441c69cf9c753877231c641b268))

## 20.2.11

Wed, 13 Sep 2023 13:01:33 GMT

### Patches

- Rich-text viewer should recognize escape characters in markdown ([ni/nimble@3dc792f](https://github.com/ni/nimble/commit/3dc792f7f70d1732f645c309df0e2b3670b5eeda))

## 20.2.10

Wed, 13 Sep 2023 05:02:34 GMT

### Patches

- Wrap long words to the next line in rich-text viewer ([ni/nimble@407e6e8](https://github.com/ni/nimble/commit/407e6e880ab4dd2122d5e9e203025492529d0b1a))

## 20.2.9

Wed, 13 Sep 2023 04:11:27 GMT

### Patches

- Update tabindex when clicking icon of a button in rich text editor toolbar. ([ni/nimble@0940f82](https://github.com/ni/nimble/commit/0940f820436cf07df5a239dec50a1022c9c054ca))

## 20.2.8

Tue, 12 Sep 2023 17:22:19 GMT

### Patches

- Add locale support to number-text column ([ni/nimble@b49755b](https://github.com/ni/nimble/commit/b49755bcb4948910c5b896b7c11abb64c6aca2cf))

## 20.2.7

Fri, 08 Sep 2023 23:00:33 GMT

### Patches

- Refactored rich text components to use common models ([ni/nimble@fcbe79b](https://github.com/ni/nimble/commit/fcbe79bafc733fd35a4fcae6ebc6aee88388d1ad))

## 20.2.6

Thu, 07 Sep 2023 18:16:08 GMT

### Patches

- Update component rollup build configuration ([ni/nimble@3f637ad](https://github.com/ni/nimble/commit/3f637ad62b61475a9340c65e4923cb01e86de8ce))

## 20.2.5

Wed, 06 Sep 2023 20:42:14 GMT

### Patches

- Revamp folder structure for rich text components ([ni/nimble@97cc70d](https://github.com/ni/nimble/commit/97cc70d749dbca3251e3efc18920ada8b4cbdfee))

## 20.2.4

Wed, 06 Sep 2023 16:21:23 GMT

### Patches

- Fix bug in number-text column when the value rounds to -0 ([ni/nimble@1e44e91](https://github.com/ni/nimble/commit/1e44e9169c32bfbf7c4d69af57b2c848d4960b1d))

## 20.2.3

Wed, 06 Sep 2023 14:58:43 GMT

### Patches

- Revert firefox workaround for caret disappear ([ni/nimble@ff093f4](https://github.com/ni/nimble/commit/ff093f4490485f0ffe0eca8733f6a16957ecda86))

## 20.2.2

Wed, 06 Sep 2023 05:43:09 GMT

### Patches

- Add label provider for rich-text-editor ([ni/nimble@75dcf39](https://github.com/ni/nimble/commit/75dcf394df02a54bf85c6d41cdaab40963d9ef3f))

## 20.2.1

Fri, 01 Sep 2023 20:47:01 GMT

### Patches

- Update table page object to return spinner from icon column ([ni/nimble@a229bd6](https://github.com/ni/nimble/commit/a229bd60ac4258bf9f9cf67d2a2560fc4d2912fa))

## 20.2.0

Fri, 01 Sep 2023 19:43:28 GMT

### Minor changes

- Add locale support to theme provider and use in date-text column ([ni/nimble@5e462b1](https://github.com/ni/nimble/commit/5e462b1baf6d1867f4e273a753856568f514ba0f))

## 20.1.22

Fri, 01 Sep 2023 07:27:14 GMT

### Patches

- Changed quadrant to originLocation and default to bottomLeft ([ni/nimble@11a47cc](https://github.com/ni/nimble/commit/11a47cc637634d5b79e56088a7431bc4fbd2fcd2))

## 20.1.21

Fri, 01 Sep 2023 06:00:57 GMT

### Patches

- Fix bug with rich text editor nested list button state ([ni/nimble@903a5d2](https://github.com/ni/nimble/commit/903a5d25104c6e5bfa0439fb7f41c191f0048abb))

## 20.1.20

Thu, 31 Aug 2023 19:17:18 GMT

### Patches

- Fix for Firefox caret disappearing issue ([ni/nimble@fcc12d5](https://github.com/ni/nimble/commit/fcc12d554b6342d1751f6bc54d598189d5465fc3))

## 20.1.19

Thu, 31 Aug 2023 17:09:05 GMT

### Patches

- Implementation of additional APIs for rich text editor ([ni/nimble@ce10bda](https://github.com/ni/nimble/commit/ce10bda19b1b9cc4e935f22cfa2b0d7ca02ed20b))

## 20.1.18

Wed, 30 Aug 2023 18:22:20 GMT

### Patches

- Fix typo in file name ([ni/nimble@6343b16](https://github.com/ni/nimble/commit/6343b16415af699b84e911aa25506e58a03dbde9))

## 20.1.17

Tue, 29 Aug 2023 16:32:09 GMT

### Patches

- Make DateText columnConfig `undefined` when the column is invalid ([ni/nimble@6837caa](https://github.com/ni/nimble/commit/6837caaf36898d3537da8b2f352d7c1bdc31dce1))

## 20.1.16

Mon, 28 Aug 2023 21:12:37 GMT

### Patches

- Add 'decimal' format to number-text column ([ni/nimble@40b952e](https://github.com/ni/nimble/commit/40b952e1910a61a4532821033bfbd2de0e8309d4))

## 20.1.15

Thu, 24 Aug 2023 21:19:51 GMT

### Patches

- Implement `alignment` attribute on number-text column ([ni/nimble@2292048](https://github.com/ni/nimble/commit/2292048647dfcd1f61fbf897ec083eacb3e269db))

## 20.1.14

Tue, 22 Aug 2023 12:48:52 GMT

### Patches

- Add setMarkdown and getMarkdown methods in rich-text-editor ([ni/nimble@42928b3](https://github.com/ni/nimble/commit/42928b304ad9b9362501f6bc923f21b4e1e81ddc))

## 20.1.13

Mon, 21 Aug 2023 23:23:23 GMT

### Patches

- Icon table column ([ni/nimble@4f0f474](https://github.com/ni/nimble/commit/4f0f4745ba013ddfbb0dbf8820df2bb6f4fb4db5))

## 20.1.12

Mon, 21 Aug 2023 22:42:29 GMT

### Patches

- Export date-text column from all-components ([ni/nimble@0ab6b4f](https://github.com/ni/nimble/commit/0ab6b4f5df8d01f6734c824d65e62e3c88546000))

## 20.1.11

Fri, 18 Aug 2023 11:34:36 GMT

### Patches

- Initial component bring up by integrating tiptap editor along with the footer formatting options ([ni/nimble@733c77c](https://github.com/ni/nimble/commit/733c77c1a63c30bd698fb6b03b4f559ef621c7d9))

## 20.1.10

Thu, 17 Aug 2023 21:57:29 GMT

### Patches

- Initial implementation of nimble-table-column-number-text ([ni/nimble@270d7fe](https://github.com/ni/nimble/commit/270d7fe2085569c0dad6deee75160c774f6c3ecc))

## 20.1.9

Thu, 17 Aug 2023 00:10:58 GMT

### Patches

- Allow date-text column customHour12 to be undefined ([ni/nimble@d2ca08c](https://github.com/ni/nimble/commit/d2ca08cd621c10c0c8dbb13c4cc01c930d29392e))

## 20.1.8

Tue, 15 Aug 2023 16:05:54 GMT

### Patches

- Improve typing for cell view ([ni/nimble@4fbf1bc](https://github.com/ni/nimble/commit/4fbf1bcf9644d9cf515ac4032c2bffb6e10b937d))

## 20.1.7

Mon, 14 Aug 2023 14:35:00 GMT

### Patches

- Updated the default height of the component ([ni/nimble@e70768b](https://github.com/ni/nimble/commit/e70768bd1d42364f51a5e486be771e4c84b132d4))

## 20.1.6

Sat, 12 Aug 2023 08:35:41 GMT

### Patches

- New render update and canvas die filtering for the wafer map component ([ni/nimble@96f22af](https://github.com/ni/nimble/commit/96f22af9a8f8eeddc995237e06cb8622eea436b2))

## 20.1.5

Fri, 11 Aug 2023 22:00:19 GMT

### Patches

- Update dependency on fast-foundation ([ni/nimble@ffc6db5](https://github.com/ni/nimble/commit/ffc6db59108c21570fdca623ecd566313b09c595))

## 20.1.4

Fri, 11 Aug 2023 15:22:19 GMT

### Patches

- Set both aria-current and aria-selected on anchor tabs ([ni/nimble@511d982](https://github.com/ni/nimble/commit/511d982f0eedb7b2db4cf937d850d02720caa3c3))

## 20.1.3

Mon, 07 Aug 2023 22:54:53 GMT

### Patches

- Show url of focused anchor tab at bottom of page ([ni/nimble@48d64be](https://github.com/ni/nimble/commit/48d64be4f2beca10d2643c621970f88d34d5c5c6))

## 20.1.2

Thu, 03 Aug 2023 22:50:39 GMT

### Patches

- Enum-text table column ([ni/nimble@058f6cb](https://github.com/ni/nimble/commit/058f6cb563d5756a95ea06875c868719f87278d4))

## 20.1.1

Thu, 03 Aug 2023 16:47:18 GMT

### Patches

- Facilitate getting cells by row/column ID ([ni/nimble@e90a0dc](https://github.com/ni/nimble/commit/e90a0dc4df48e6e243cf67f528735397fdff4c9c))

## 20.1.0

Wed, 02 Aug 2023 19:10:45 GMT

### Minor changes

- Storybook integration for primary and accent appearance-variant buttons (#663) ([ni/nimble@3b37cf1](https://github.com/ni/nimble/commit/3b37cf1deb3377b36c069e884d2b938b11048acd))
- Bump @ni/nimble-tokens to v6.3.0

## 20.0.6

Wed, 02 Aug 2023 00:19:04 GMT

### Patches

- Fix table bug where shift-selecting rows would highlight all cell content ([ni/nimble@aa64ac8](https://github.com/ni/nimble/commit/aa64ac8f7b8e200e07af05c88b5f45d9a2b560db))

## 20.0.5

Tue, 01 Aug 2023 20:43:24 GMT

### Patches

- Add formatting API to date column ([ni/nimble@0073be1](https://github.com/ni/nimble/commit/0073be19aed7f9b1efe428f5f9f5b261ab1983db))

## 20.0.4

Tue, 01 Aug 2023 19:55:33 GMT

### Patches

- Fix for table horizontal scrollbar issue. ([ni/nimble@cf57e40](https://github.com/ni/nimble/commit/cf57e402e2a16a1587b7950be19412228990a156))

## 20.0.3

Tue, 01 Aug 2023 16:43:05 GMT

### Patches

- Implemented the update tracker for the wafermap and split the render in the new update functions for each module ([ni/nimble@1b54a7b](https://github.com/ni/nimble/commit/1b54a7b10540afa5988c214af755362677de9fab))

## 20.0.2

Mon, 31 Jul 2023 22:52:43 GMT

### Patches

- Fix keyboard navigation with hidden anchor tabs ([ni/nimble@74c4a83](https://github.com/ni/nimble/commit/74c4a8348923a8f91717366976307852f90a0d1e))

## 20.0.1

Wed, 26 Jul 2023 21:12:22 GMT

### Patches

- Forward aria-label to icon svg ([ni/nimble@0063037](https://github.com/ni/nimble/commit/006303745acff09d70350faf2cac0cddf06d4121))

## 20.0.0

Tue, 25 Jul 2023 21:12:32 GMT

### Major changes

- Remove nimble-banner dismissButtonLabel (replaced by the popupDismiss label on nimble-label-provider-core) ([ni/nimble@2c77e8e](https://github.com/ni/nimble/commit/2c77e8e7b542572ca792c3d1aa00d8ac2010a888))

## 19.9.2

Tue, 25 Jul 2023 03:47:30 GMT

### Patches

- Implementation of markdown parser for converting markdown input to rich text content in the viewer ([ni/nimble@05f2975](https://github.com/ni/nimble/commit/05f297566e45e9589e1613b8a7b2c316f4b3bd68))

## 19.9.1

Mon, 24 Jul 2023 21:12:18 GMT

### Patches

- Fix tabs and anchor-tabs styling to allow tabs-toolbar content to be right aligned ([ni/nimble@55f48a5](https://github.com/ni/nimble/commit/55f48a51b88c5a8f0a0d3fa571fc2dbcbdb4a755))

## 19.9.0

Mon, 24 Jul 2023 15:02:47 GMT

### Minor changes

- Initial version of date column ([ni/nimble@44e7d0d](https://github.com/ni/nimble/commit/44e7d0d3a06dead27f48a98698aa78d1fd65f9e3))

## 19.8.5

Fri, 21 Jul 2023 17:06:05 GMT

### Patches

- Fire event when columns interactively resized ([ni/nimble@dc57f15](https://github.com/ni/nimble/commit/dc57f15fa0f70243372becffa791c9ed2e1c5986))

## 19.8.4

Thu, 20 Jul 2023 16:23:00 GMT

### Patches

- Remove placeholder support from table columns ([ni/nimble@a318010](https://github.com/ni/nimble/commit/a3180102e5798540621a0d60ef93ca827649a988))

## 19.8.3

Thu, 20 Jul 2023 03:09:06 GMT

### Patches

- Update tanstack dependency and configure undefined value sorting mode ([ni/nimble@0541d6d](https://github.com/ni/nimble/commit/0541d6d412dd3b011756e07719656f30b20dc234))

## 19.8.2

Wed, 19 Jul 2023 17:37:59 GMT

### Patches

- Adding interactive column sizing ([ni/nimble@e900711](https://github.com/ni/nimble/commit/e900711c560465f590c37753cf6769641b2d92a0))

## 19.8.1

Tue, 18 Jul 2023 18:56:23 GMT

### Patches

- Fix icon color for disabled menu items and disabled text fields ([ni/nimble@b6c4eda](https://github.com/ni/nimble/commit/b6c4edafd60eb2e7c37c1b296b846a3ef5bcdee3))

## 19.8.0

Tue, 18 Jul 2023 17:52:57 GMT

### Minor changes

- Add recordId to TableCell, TableCellView, and delegated event details ([ni/nimble@3e74c7c](https://github.com/ni/nimble/commit/3e74c7c767c44b51823449b6bfd0606838b99771))

## 19.7.0

Mon, 17 Jul 2023 17:19:39 GMT

### Minor changes

- Spinner Accent Appearance (#1298) ([ni/nimble@9ecabb3](https://github.com/ni/nimble/commit/9ecabb35fbca4f0c233eb2dd0c4adb78027e0add))

## 19.6.3

Mon, 17 Jul 2023 16:19:17 GMT

### Patches

- hide unused slots ([ni/nimble@05f9022](https://github.com/ni/nimble/commit/05f90223f3819e135ab38796f850814ac4c21a8e))

## 19.6.2

Mon, 17 Jul 2023 15:05:54 GMT

### Patches

- Initial code bring up for nimble-rich-text-editor component ([ni/nimble@733c77c](https://github.com/ni/nimble/commit/733c77c1a63c30bd698fb6b03b4f559ef621c7d9))

## 19.6.1

Fri, 14 Jul 2023 22:15:57 GMT

### Patches

- Default appearance for buttons better matches visual design spec. Text is now semi-bold, border is more prominent when focused, and border hover color is changed for dark theme ([ni/nimble@88248bc](https://github.com/ni/nimble/commit/88248bc22d9b50da299331a87863c65fe3c25cdb))
- Bump @ni/nimble-tokens to v6.2.1

## 19.6.0

Fri, 14 Jul 2023 20:57:32 GMT

### Minor changes

- New icon with a clock and exclamation mark to represent an expired state ([ni/nimble@448a014](https://github.com/ni/nimble/commit/448a0147ee38c0f1cbe0ece06ecd103e4e3f5788))
- Bump @ni/nimble-tokens to v6.2.0

## 19.5.0

Thu, 13 Jul 2023 23:41:13 GMT

### Minor changes

- Add nimble-label-provider-core and -table, along with localizable DesignTokens for labels/strings declared by Nimble components. Add docs for Localization. ([ni/nimble@d5b19d5](https://github.com/ni/nimble/commit/d5b19d5a7b4e2406209f8aed15fa4d0ea9658a09))

## 19.4.5

Thu, 13 Jul 2023 16:50:52 GMT

### Patches

- Fix combobox scroll issue. ([ni/nimble@fbb5df8](https://github.com/ni/nimble/commit/fbb5df8dda1a776a7ff7fd10d4b3157919ad34a6))

## 19.4.4

Fri, 30 Jun 2023 16:02:24 GMT

### Patches

- Overflow directive ([ni/nimble@0d17d95](https://github.com/ni/nimble/commit/0d17d95074479cad512f1dd0640ff0c3cad09f91))

## 19.4.3

Wed, 28 Jun 2023 22:34:33 GMT

### Patches

- Change text-column base class property behavior ([ni/nimble@a8148fe](https://github.com/ni/nimble/commit/a8148fe86743b45ac970c7a4c9fd2e46fd6280da))

## 19.4.2

Wed, 28 Jun 2023 13:37:50 GMT

### Patches

- Initial code bring up for nimble-rich-text-viewer component ([ni/nimble@c88e365](https://github.com/ni/nimble/commit/c88e3657b05f6b04a34115acdd13ecb6b7b9c0c6))

## 19.4.1

Tue, 27 Jun 2023 19:05:52 GMT

### Patches

- Add additional functions to table page object ([ni/nimble@137db4c](https://github.com/ni/nimble/commit/137db4ca75e10b5d8316e12ac86c59b0efd468a3))

## 19.4.0

Tue, 20 Jun 2023 14:17:25 GMT

### Minor changes

- New icons for bold, italic, and numbered list ([ni/nimble@d8a2f69](https://github.com/ni/nimble/commit/d8a2f6933982381c2724f87737873b2f9374a706))
- Bump @ni/nimble-tokens to v6.1.0

## 19.3.0

Fri, 16 Jun 2023 19:24:51 GMT

### Minor changes

- Add tooltip to ellipsized table header ([ni/nimble@58ad3aa](https://github.com/ni/nimble/commit/58ad3aac8e3f7984bbbbde371dfca77527d90383))

## 19.2.3

Tue, 13 Jun 2023 14:50:08 GMT

### Patches

- Fix inconsistencies in combobox filtering ([ni/nimble@7efade9](https://github.com/ni/nimble/commit/7efade909a782e65cb256065ac5a9a59bae94ddf))

## 19.2.2

Mon, 12 Jun 2023 21:34:35 GMT

### Patches

- Fix GroupRow component template ([ni/nimble@562c2ec](https://github.com/ni/nimble/commit/562c2ec63b6c8391633f17d33a311535b61627f4))

## 19.2.1

Mon, 12 Jun 2023 13:16:59 GMT

### Patches

- Created a generic Tracker class, extended it to a validator and an update tracker and implemented them in the table ([ni/nimble@121a4f1](https://github.com/ni/nimble/commit/121a4f18d996f09af1f0db70b873f6d7cdda646d))

## 19.2.0

Fri, 02 Jun 2023 07:49:02 GMT

### Minor changes

- added a design token for graph gridlines ([ni/nimble@a3264e1](https://github.com/ni/nimble/commit/a3264e123c5c3170d3957c238b2bd793e6d294f1))

## 19.1.3

Thu, 01 Jun 2023 14:41:19 GMT

### Patches

- Clear combobox filter when value set programatically ([ni/nimble@2c5206b](https://github.com/ni/nimble/commit/2c5206bd71fd9e97ed0dffbe21fbaa253b893652))

## 19.1.2

Tue, 23 May 2023 20:18:10 GMT

### Patches

- Use anchored region in Select and Combobox ([ni/nimble@e9f0332](https://github.com/ni/nimble/commit/e9f03324de6ad96d901099b8cf0341b75c5fd881))

## 19.1.1

Tue, 23 May 2023 16:09:57 GMT

### Patches

- Move ColumnInternals to abstract property ([ni/nimble@c03b36b](https://github.com/ni/nimble/commit/c03b36bd9056ef9ad08b156bcaba4d8d2c591c2d))

## 19.1.0

Mon, 22 May 2023 18:39:33 GMT

### Minor changes

- Introduce column configuration validation ([ni/nimble@c23fbe5](https://github.com/ni/nimble/commit/c23fbe55a607508ecc94d7e9d475dc478629cf8a))

## 19.0.2

Wed, 17 May 2023 21:33:40 GMT

### Patches

- Add column-configuration-change event to the nimble-table ([ni/nimble@71351b1](https://github.com/ni/nimble/commit/71351b15e45f68adb8b08db2168b5faf499a49f9))

## 19.0.1

Fri, 12 May 2023 23:44:48 GMT

### Patches

- Refactor to create base classes for table columns that display text ([ni/nimble@c00161d](https://github.com/ni/nimble/commit/c00161dc10ec928b14f3c7cfe0b14a6a05f5551e))

## 19.0.0

Fri, 12 May 2023 17:59:07 GMT

### Major changes

- Added 'down-right-from-square', 'up-right-from-square', and 'file-arrow-curved-right' icons. Removed 'share-square' (use the 'up-right-from-square' icon instead) and 'file-export' (use the 'file-arrow-curved-right' icon instead) icons. ([ni/nimble@1e04075](https://github.com/ni/nimble/commit/1e040752c74ea8fc0df586a2a54525e15d5c8b29))
- Bump @ni/nimble-tokens to v6.0.0

## 18.13.6

Thu, 11 May 2023 18:44:25 GMT

### Patches

- Fix row styling issue ([ni/nimble@588e269](https://github.com/ni/nimble/commit/588e269cb3992753153a835a407c6694e4abe6b8))

## 18.13.5

Mon, 08 May 2023 16:14:00 GMT

### Patches

- Add support for CTRL and SHIFT clicks in the table ([ni/nimble@461f55a](https://github.com/ni/nimble/commit/461f55a8fe1913b24312828e6608024e45cfef7c))

## 18.13.4

Mon, 08 May 2023 14:01:25 GMT

### Patches

- Prevent double click select text on header ([ni/nimble@0bee650](https://github.com/ni/nimble/commit/0bee650663f75e1a497ff7334fa144e5acbb53ac))

## 18.13.3

Fri, 05 May 2023 21:44:18 GMT

### Patches

- Interactive sorting support for the table ([ni/nimble@ec21375](https://github.com/ni/nimble/commit/ec2137514d0a4c1b99323d80b911f05c41d41145))

## 18.13.2

Fri, 05 May 2023 20:18:38 GMT

### Patches

- Introduce shared user-select styling ([ni/nimble@cb2bf64](https://github.com/ni/nimble/commit/cb2bf64825e963d86ebe8bd740ebc52196edcd76))

## 18.13.1

Fri, 05 May 2023 15:27:55 GMT

### Patches

- Update size of the table's action menu ([ni/nimble@592c535](https://github.com/ni/nimble/commit/592c535b6f1e43b007db4da8b2ed9b226e06d644))

## 18.13.0

Mon, 01 May 2023 20:33:27 GMT

### Minor changes

- Export table page object  ([ni/nimble@1416056](https://github.com/ni/nimble/commit/1416056e356ce9338db8fe067d9850d65d9c0346))

## 18.12.7

Fri, 28 Apr 2023 15:33:55 GMT

### Patches

- Anchor table column type ([ni/nimble@78d39d3](https://github.com/ni/nimble/commit/78d39d34d9ee9a8852ba6eeb40119157493e7f76))

## 18.12.6

Wed, 26 Apr 2023 17:40:07 GMT

### Patches

- Spinner now allows internal configuration of animation play state ([ni/nimble@e946415](https://github.com/ni/nimble/commit/e9464153249e21394b06fc5e92cc19c002cf6828))

## 18.12.5

Tue, 25 Apr 2023 20:41:37 GMT

### Patches

- Adding collapse-all-button ([ni/nimble@6c2fa63](https://github.com/ni/nimble/commit/6c2fa633203e7877536314d01d11b96866ba5376))

## 18.12.4

Tue, 25 Apr 2023 18:09:46 GMT

### Patches

- Updating row styling. ([ni/nimble@2a0427f](https://github.com/ni/nimble/commit/2a0427f9ccd40f1a1a2ce5c4014df91ab4e1b55a))

## 18.12.3

Fri, 21 Apr 2023 16:14:07 GMT

### Patches

- Anchor tree item selection sets group selection state ([ni/nimble@8689083](https://github.com/ni/nimble/commit/8689083addde5db28d5b0c0f16972216c27f42a0))

## 18.12.2

Wed, 19 Apr 2023 17:58:44 GMT

### Patches

- Storybook updates for design token build changes ([ni/nimble@203525b](https://github.com/ni/nimble/commit/203525bfb38afb4d440c54a8bc8950e4748bf748))
- Bump @ni/nimble-tokens to v5.0.0

## 18.12.1

Fri, 14 Apr 2023 14:26:33 GMT

### Patches

- Add support for multi-select in the table ([ni/nimble@e6e882a](https://github.com/ni/nimble/commit/e6e882acfbaa112cc1d3bb280981dd8768e991b8))

## 18.12.0

Tue, 11 Apr 2023 01:58:34 GMT

### Minor changes

- Adding icon: file-export ([ni/nimble@d339db7](https://github.com/ni/nimble/commit/d339db767c179e2398ccadc6111d9ab7c72ca6bb))
- Bump @ni/nimble-tokens to v4.9.0

## 18.11.1

Mon, 10 Apr 2023 19:29:13 GMT

### Patches

- Add the table column internals api for column authors ([ni/nimble@49ea4be](https://github.com/ni/nimble/commit/49ea4be8b29e5426f01f64811f4cc648316c144f))

## 18.11.0

Mon, 10 Apr 2023 18:53:34 GMT

### Minor changes

- Adding 3 icons: triangle-two-lines-horizontal, two-squares-in-brackets, two-triangles-between-lines ([ni/nimble@b14c239](https://github.com/ni/nimble/commit/b14c239ec88207b6561e90f447c1975e429e086f))
- Bump @ni/nimble-tokens to v4.8.0

## 18.10.6

Fri, 07 Apr 2023 20:48:27 GMT

### Patches

- Update fonts.scss to reference the new nimble-tokens fonts.scss file ([ni/nimble@ce0d505](https://github.com/ni/nimble/commit/ce0d505f4f79cd384aa4224f7faf2b66d4941138))
- Bump @ni/nimble-tokens to v4.7.3

## 18.10.5

Thu, 06 Apr 2023 21:12:10 GMT

### Patches

- Support selecting a single row in the table ([ni/nimble@16d3c53](https://github.com/ni/nimble/commit/16d3c53c367518f8c670696c997fbc8d5e89bea0))

## 18.10.4

Thu, 06 Apr 2023 19:46:21 GMT

### Patches

- Programmatic table row grouping ([ni/nimble@b7fbb73](https://github.com/ni/nimble/commit/b7fbb738322e83b315fce68890caaaf4ce56d9e1))

## 18.10.3

Thu, 06 Apr 2023 17:21:40 GMT

### Patches

- Add ariaSelected property to anchor tab ([ni/nimble@b042f21](https://github.com/ni/nimble/commit/b042f218a9cfc31c015e6e38af164265c4f58c9f))

## 18.10.2

Wed, 05 Apr 2023 22:05:06 GMT

### Patches

- Fix radio button focus ring scrolling bug ([ni/nimble@5598883](https://github.com/ni/nimble/commit/5598883e3910e0d4712e1a2623740fc928f6b1c8))

## 18.10.1

Wed, 05 Apr 2023 18:54:28 GMT

### Patches

- Upgrade to typescript 4.7.4 ([ni/nimble@2dd4d31](https://github.com/ni/nimble/commit/2dd4d31306ba122fb8f5378cd83e8abc83bfa618))
- Bump @ni/nimble-tokens to v4.7.2

## 18.10.0

Wed, 05 Apr 2023 17:16:16 GMT

### Minor changes

- Anchor tree item component ([ni/nimble@1827deb](https://github.com/ni/nimble/commit/1827debb2b303a140bee1b23a01f8d94dbc35247))

## 18.9.1

Tue, 04 Apr 2023 23:23:52 GMT

### Patches

- Table updates: use custom element (TableCellView) in cells, cells are notified of row recycling, action menus are closed on scroll/ row recycles. ([ni/nimble@91172d9](https://github.com/ni/nimble/commit/91172d95006601f5bb57a8831238e114f837dbf5))

## 18.9.0

Tue, 04 Apr 2023 19:42:20 GMT

### Minor changes

- Error state and update of focus state visuals for text area component ([ni/nimble@32bd2ad](https://github.com/ni/nimble/commit/32bd2adecfea401853993df53e8307e060ceb45a))

## 18.8.4

Mon, 03 Apr 2023 21:31:32 GMT

### Patches

- Allow events to bubble enough for Angular nimbleRouterLink directive to work ([ni/nimble@9bcfe99](https://github.com/ni/nimble/commit/9bcfe9997a520cf952e63fd48440dc23f13ec63d))

## 18.8.3

Mon, 03 Apr 2023 18:19:24 GMT

### Patches

- Change menu to explicit side-effect import of anchored-region ([ni/nimble@ed97369](https://github.com/ni/nimble/commit/ed97369fe171c4f2535e651e09a0a20214bbebcc))

## 18.8.2

Sat, 01 Apr 2023 05:14:36 GMT

### Patches

- Add missing anchored region import to menu component as part of Storybook 7 upgrade ([ni/nimble@b2ab12c](https://github.com/ni/nimble/commit/b2ab12c6ab80c0ad5bad389893dd52e9a04995be))

## 18.8.1

Wed, 22 Mar 2023 20:54:34 GMT

### Patches

- Update table header styling to not reserve space for sort icon ([ni/nimble@459bc0e](https://github.com/ni/nimble/commit/459bc0e425822ee15ba62c557f86dd78b92d4158))

## 18.8.0

Wed, 15 Mar 2023 15:36:39 GMT

### Minor changes

- Implement anchor menu item component ([ni/nimble@f1d6370](https://github.com/ni/nimble/commit/f1d6370d5548786004b5ef5d07b7657504d1fdf3))

## 18.7.0

Tue, 14 Mar 2023 14:51:12 GMT

### Minor changes

- Expose element tag name for some components that were missing it ([ni/nimble@f5c6a7c](https://github.com/ni/nimble/commit/f5c6a7cc64b1892d1e0c5d75a64637f7043ee020))

## 18.6.4

Fri, 10 Mar 2023 23:11:05 GMT

### Patches

- Queue table changes and process them in a batch ([ni/nimble@278811b](https://github.com/ni/nimble/commit/278811bfbe152b64978c9552de1a815bd015fcb1))

## 18.6.3

Fri, 10 Mar 2023 22:17:50 GMT

### Patches

- Programmatic table column width API ([ni/nimble@d38391e](https://github.com/ni/nimble/commit/d38391e69c9984de80bf7f4a41cfbcc0181e0d16))

## 18.6.2

Fri, 10 Mar 2023 17:48:14 GMT

### Patches

- Support "." in table record field names ([ni/nimble@a38c155](https://github.com/ni/nimble/commit/a38c155c6c5c7d80e1123ad9e5f00495b57e8b34))

## 18.6.1

Thu, 09 Mar 2023 22:36:20 GMT

### Patches

- Set title attribute in text column ([ni/nimble@f7cb89f](https://github.com/ni/nimble/commit/f7cb89f7523890976b652940dac06f49aeb3017b))

## 18.6.0

Thu, 02 Mar 2023 18:38:23 GMT

### Minor changes

- Exposed a constant for tag names on nimble components. Enabled Chromatic TurboSnap to reduce the number of Chromatic snapshots consumed by the Nimble build pipeline. ([ni/nimble@4ae2070](https://github.com/ni/nimble/commit/4ae2070766afb33d5be6df1d25dcf3df93f75deb))

## 18.5.8

Thu, 02 Mar 2023 17:48:41 GMT

### Patches

- Add programmatic column sorting support to the table ([ni/nimble@1a1e630](https://github.com/ni/nimble/commit/1a1e630c2741fd00d73f6b6be700aada832143c4))

## 18.5.7

Wed, 01 Mar 2023 18:28:57 GMT

### Patches

- Using new fallback font definitions from `nimble-tokens` that more closely match the design system fonts. This helps minimize font swap jitter on initial page load. ([ni/nimble@29c1ec3](https://github.com/ni/nimble/commit/29c1ec36b4284fff6e104f61a1c483f94945870c))
- Bump @ni/nimble-tokens to v4.7.1

## 18.5.6

Wed, 01 Mar 2023 17:20:37 GMT

### Patches

- Make tab panels scrollable ([ni/nimble@87eb2c0](https://github.com/ni/nimble/commit/87eb2c0a840f5afe1715e3115eeb5c4edff8ffdb))

## 18.5.5

Wed, 01 Mar 2023 14:29:04 GMT

### Patches

- Implementation for die padding for the wafer map component ([ni/nimble@0e89134](https://github.com/ni/nimble/commit/0e8913430f74431f5cf8a780b2f17f656480b683))

## 18.5.4

Tue, 28 Feb 2023 11:04:40 GMT

### Patches

- Implementation for the hover feature in the Wafer map component ([ni/nimble@05d4139](https://github.com/ni/nimble/commit/05d4139de721834e107f2d9db15111f41f19309f))

## 18.5.3

Tue, 21 Feb 2023 20:30:27 GMT

### Patches

- Allow table columns to be marked as hidden ([ni/nimble@8fcdeb8](https://github.com/ni/nimble/commit/8fcdeb884b9be29b92b4e273991fbc96f077d744))

## 18.5.2

Mon, 20 Feb 2023 17:53:22 GMT

### Patches

- New HLD for the hover feature of the Wafer Map component ([ni/nimble@e129dbb](https://github.com/ni/nimble/commit/e129dbb98df339c7f0b1f5b3db195bbbef5e93e9))

## 18.5.1

Mon, 20 Feb 2023 15:59:14 GMT

### Patches

- Change table column base methods into internal observable properties ([ni/nimble@cb3179f](https://github.com/ni/nimble/commit/cb3179ff097069bb7be9af0153e6745ffe6970d2))

## 18.5.0

Fri, 17 Feb 2023 21:25:30 GMT

### Minor changes

- Define type for banner toggle event detail ([ni/nimble@8c748c8](https://github.com/ni/nimble/commit/8c748c8f5e1b67bb7f2c984f1a91c14f967108c8))

## 18.4.1

Fri, 17 Feb 2023 19:44:11 GMT

### Patches

- Provide ability to specify an action menu for a table column ([ni/nimble@0cc63e6](https://github.com/ni/nimble/commit/0cc63e618d789506063b68d2b153059df2d21b1f))

## 18.4.0

Wed, 15 Feb 2023 21:23:30 GMT

### Minor changes

- Banner component ([ni/nimble@0248f3d](https://github.com/ni/nimble/commit/0248f3d6d7a0e0dcc7c6a9d4fb982bdbb78ea3d5))

## 18.3.7

Tue, 14 Feb 2023 22:59:44 GMT

### Patches

- Fix bug where pointer events were being swallowed by table row hover ([ni/nimble@0edf085](https://github.com/ni/nimble/commit/0edf08583fe9196ca449b701e417980e7514adac))

## 18.3.6

Tue, 14 Feb 2023 19:59:45 GMT

### Patches

- Changed canvas size and zoom behavior for the Wafer Map Component ([ni/nimble@97c87a7](https://github.com/ni/nimble/commit/97c87a718b735c46f3d3b4e109302c368fa3e161))

## 18.3.5

Tue, 14 Feb 2023 17:27:05 GMT

### Patches

- Add column IDs to table ([ni/nimble@a88731d](https://github.com/ni/nimble/commit/a88731d393687500fc23f86437a73bc6c947e17f))

## 18.3.4

Tue, 14 Feb 2023 16:15:37 GMT

### Patches

- Bump @ni/nimble-tokens to v4.7.0

## 18.3.3

Tue, 14 Feb 2023 15:44:48 GMT

### Patches

- Support dynamic arbitrary header content ([ni/nimble@9b95448](https://github.com/ni/nimble/commit/9b954486247d818d9f5326c1942d51d6a6d0af7b))

## 18.3.2

Mon, 13 Feb 2023 23:05:12 GMT

### Patches

- Table styling update to headers when scrollbar is showing ([ni/nimble@97201af](https://github.com/ni/nimble/commit/97201afa8cc6499a8d1c3b1b593f377cfee883cf))

## 18.3.1

Fri, 10 Feb 2023 20:11:53 GMT

### Patches

- Fix background color of dropdown listbox ([ni/nimble@571f121](https://github.com/ni/nimble/commit/571f121aa06be77e178a794846dbe0ef985433b8))

## 18.3.0

Fri, 10 Feb 2023 19:40:36 GMT

### Minor changes

- Add icons for column sorting ([ni/nimble@4df842d](https://github.com/ni/nimble/commit/4df842d8bc104a9f02d4f73c76f778c6f7b71ef8))
- Bump @ni/nimble-tokens to v4.6.0

## 18.2.0

Fri, 10 Feb 2023 15:26:34 GMT

### Minor changes

- Add new save icon ([ni/nimble@b5ca27c](https://github.com/ni/nimble/commit/b5ca27c7db12c4d69eaf4cc0b57cd15ebc581ddb))
- Bump @ni/nimble-tokens to v4.5.0

## 18.1.4

Thu, 09 Feb 2023 17:09:32 GMT

### Patches

- Fix issue re-rendering table cells when the table becomes valid again ([ni/nimble@26cdfea](https://github.com/ni/nimble/commit/26cdfeae9c0c418b48f8ed10acb82c8594960f2a))

## 18.1.3

Thu, 09 Feb 2023 14:24:11 GMT

### Patches

- Add zoom functionality to wafer map ([ni/nimble@61ae65c](https://github.com/ni/nimble/commit/61ae65cf7c5ce57cd17a1deb03bed1186a04a871))

## 18.1.2

Tue, 07 Feb 2023 20:17:44 GMT

### Patches

- Fix nimble-table virtualizer bug (when table height changes) ([ni/nimble@48e5e07](https://github.com/ni/nimble/commit/48e5e07874f03ce339e2c05b8345500fd5d5e654))

## 18.1.1

Mon, 06 Feb 2023 16:22:19 GMT

### Patches

- remove explicitly calling out 'null' in type of table's idFieldName property ([ni/nimble@00800bd](https://github.com/ni/nimble/commit/00800bde3e48f362e0cb0c648e947272b5696b34))

## 18.1.0

Mon, 30 Jan 2023 19:00:43 GMT

### Minor changes

- Nimble dependencies updated to latest ([ni/nimble@e1da136](https://github.com/ni/nimble/commit/e1da13662d82fa41f81f038335e6a142355de29e))
- Bump @ni/nimble-tokens to v4.4.0

## 18.0.3

Fri, 27 Jan 2023 20:53:57 GMT

### Patches

- Add virtualization to table ([ni/nimble@c334239](https://github.com/ni/nimble/commit/c334239a606b1b0920c389592ac840182ec8a882))

## 18.0.2

Fri, 27 Jan 2023 15:05:13 GMT

### Patches

- Create `setData()` function on the table rather than having a `data` property ([ni/nimble@f19bf61](https://github.com/ni/nimble/commit/f19bf610f46683eae4c80f2bdd5967d76e63124a))

## 18.0.1

Thu, 26 Jan 2023 19:17:59 GMT

### Patches

- Fix table row rendering on Safari ([ni/nimble@2e5a1c8](https://github.com/ni/nimble/commit/2e5a1c8875db2f230f49bc923d6126aba99200fe))

## 18.0.0

Thu, 26 Jan 2023 18:50:13 GMT

### Major changes

- Add 'beforetoggle' event on menu button and rename 'open-change' event to 'toggle'.
Update menu button to work when the slotted menu is nested within additional slots. ([ni/nimble@c39e8c8](https://github.com/ni/nimble/commit/c39e8c80af79ada2a696372c93161355187944af))

## 17.2.0

Tue, 24 Jan 2023 21:30:30 GMT

### Minor changes

- Add design tokens for additional spinner sizes, and update docs. ([ni/nimble@3c778c0](https://github.com/ni/nimble/commit/3c778c0a354dcc5883273ac62b7edd9a3dbed3cd))

## 17.1.0

Fri, 20 Jan 2023 22:27:00 GMT

### Minor changes

- Anchor tabs component ([ni/nimble@4c3c715](https://github.com/ni/nimble/commit/4c3c71571e92a5ca1ebc62a259c889cb90df710c))

## 17.0.8

Fri, 20 Jan 2023 10:47:22 GMT

### Patches

- Updated the WaferDie Interface to add an extra "tooltip" field ([ni/nimble@8fba3fd](https://github.com/ni/nimble/commit/8fba3fd7bf0ca6da7d6de9bcfbb0b817a1247b5c))

## 17.0.7

Thu, 19 Jan 2023 13:56:34 GMT

### Patches

- Fixed issues with rendering ([ni/nimble@47a5a0d](https://github.com/ni/nimble/commit/47a5a0d167c9d490791ff68c7f570161125cbc86))

## 17.0.6

Wed, 18 Jan 2023 21:20:08 GMT

### Patches

- Fix bug in table record ID logic ([ni/nimble@fa6aff9](https://github.com/ni/nimble/commit/fa6aff9024add0e848792001f85da2d4067054dd))

## 17.0.5

Wed, 18 Jan 2023 15:32:21 GMT

### Patches

- Fix menu background color on Color theme ([ni/nimble@5d2d985](https://github.com/ni/nimble/commit/5d2d985c73ccf41f7123593e41099569e619bab8))

## 17.0.4

Wed, 18 Jan 2023 14:55:24 GMT

### Patches

- Update table row styles ([ni/nimble@eaa3e67](https://github.com/ni/nimble/commit/eaa3e675766b5792343cf78f835cc8bc6a7d3986))

## 17.0.3

Sat, 14 Jan 2023 00:16:05 GMT

### Patches

- Introduce TableColumn and TableColumnText ([ni/nimble@86ea30b](https://github.com/ni/nimble/commit/86ea30bf6d6ed01cbe449f5ec67652b151d8d2a5))

## 17.0.2

Fri, 13 Jan 2023 07:16:01 GMT

### Patches

- Add zoom functionality to wafer map ([ni/nimble@61ae65c](https://github.com/ni/nimble/commit/61ae65cf7c5ce57cd17a1deb03bed1186a04a871))

## 17.0.1

Thu, 12 Jan 2023 15:29:47 GMT

### Patches

- Add ability to specify a field within the table's data to use as a row's ID ([ni/nimble@92c0e3f](https://github.com/ni/nimble/commit/92c0e3f70282e055d3d1742265567bb6e53b7b8d))

## 17.0.0

Wed, 11 Jan 2023 21:08:14 GMT

### Major changes

- Update box shadow tokens, including removing the 'popupBoxShadowColor' token. The 'popupBoxShadowColor' token has been replaced by elevation tokens. ([ni/nimble@14d2e7c](https://github.com/ni/nimble/commit/14d2e7ce92455bfca0e61c2956f50a32ef1f253d))

## 16.1.8

Wed, 11 Jan 2023 20:34:04 GMT

### Patches

- Update styleguide versions ([ni/nimble@d36bef4](https://github.com/ni/nimble/commit/d36bef4533df1908c92f4cb0e795ffb647bda627))
- Bump @ni/nimble-tokens to v4.3.2

## 16.1.7

Mon, 09 Jan 2023 23:44:20 GMT

### Patches

- Fix tab keyboard focus style ([ni/nimble@0d8fb2c](https://github.com/ni/nimble/commit/0d8fb2cd0ffe5d15254bba17b59d733ca11493c4))

## 16.1.6

Thu, 05 Jan 2023 18:31:08 GMT

### Patches

- Fix scrolling in the table ([ni/nimble@ac9e6c9](https://github.com/ni/nimble/commit/ac9e6c938436ccafae57842cc549c8c1ff183470))

## 16.1.5

Thu, 05 Jan 2023 16:41:38 GMT

### Patches

- Fixed the wafer-map resizing issues ([ni/nimble@01b31f4](https://github.com/ni/nimble/commit/01b31f49d75b8cc7ad3d8794fed4c9fd6d46ebb0))

## 16.1.4

Wed, 04 Jan 2023 21:51:15 GMT

### Patches

- Add rollup configuration to remove process.env.NODE_ENV ([ni/nimble@5a509a2](https://github.com/ni/nimble/commit/5a509a200990916575422b9c1e05d7cd1825331f))

## 16.1.3

Fri, 16 Dec 2022 21:11:13 GMT

### Patches

- Implement basic styling for nimble-table ([ni/nimble@48a9d51](https://github.com/ni/nimble/commit/48a9d514b129b37e1e3faa057c024e46e358fa3a))

## 16.1.2

Fri, 16 Dec 2022 18:41:04 GMT

### Patches

- create element for nimble-table-header ([ni/nimble@1328e1e](https://github.com/ni/nimble/commit/1328e1ed6c146b0537b4c5c46386d5c97a17052e))

## 16.1.1

Fri, 16 Dec 2022 15:11:41 GMT

### Patches

- - Update table template to include nimble-table-row and nimble-table-cell
 - Set the appropriate ARIA roles on nimble-table and sub elements ([ni/nimble@1700ba3](https://github.com/ni/nimble/commit/1700ba38c27d96d123d92084664ba5e7568232fe))

## 16.1.0

Fri, 16 Dec 2022 01:12:53 GMT

### Minor changes

- Spinner component ([ni/nimble@c50d9a2](https://github.com/ni/nimble/commit/c50d9a2e1934141b3a5dde98ceb84c8b992f1396))

## 16.0.0

Tue, 13 Dec 2022 22:11:51 GMT

### Major changes

- Implemented rendering module ([ni/nimble@8d11dc1](https://github.com/ni/nimble/commit/8d11dc1ff22a2b6d3c458359a419a4b930d738fd))

### Minor changes

- Anchor and Anchor Button components ([ni/nimble@ef1a9c5](https://github.com/ni/nimble/commit/ef1a9c554ad63d12a523436be7782b7d133dc19c))

### Patches

- Wafermap ensure rendering only happens after template construction ([ni/nimble@bb4bc33](https://github.com/ni/nimble/commit/bb4bc33dcd84cf3b50f21e47e4183eb80e4061e1))

## 15.5.8

Tue, 13 Dec 2022 19:56:22 GMT

### Patches

- - Implemented a seeded value generator for the dies (PR feedback) ([ni/nimble@4826bcb](https://github.com/ni/nimble/commit/4826bcb3e4264b76df212dc7757b568a07aa6218))

## 15.5.7

Mon, 12 Dec 2022 23:04:31 GMT

### Patches

- Changed wafer map rendering die opacity to rgba color alpha channel  ([ni/nimble@8a8410d](https://github.com/ni/nimble/commit/8a8410dcbef2a54463b0d4b4a4bc79b8a2b6792a))

## 15.5.6

Mon, 12 Dec 2022 18:13:52 GMT

### Patches

- Created render queue for wafer map component input changes ([ni/nimble@e70046b](https://github.com/ni/nimble/commit/e70046b7a09cd85253303ba5ec4bf2ab314c9c6d))

## 15.5.5

Fri, 09 Dec 2022 23:00:24 GMT

### Patches

- Basic TanStack integration with nimble-table ([ni/nimble@a4ce35d](https://github.com/ni/nimble/commit/a4ce35df8efd5b806cc0335b30a2c4764d470a8c))

## 15.5.4

Fri, 09 Dec 2022 11:25:00 GMT

### Patches

- Finished first iteration of the waferMap component and its storybook ([ni/nimble@001156d](https://github.com/ni/nimble/commit/001156d6c85f250a934ed8819b6a0650fe26eb84))

## 15.5.3

Wed, 07 Dec 2022 13:10:43 GMT

### Patches

- Created data manager module, prerendering functionality and modified some interface inputs ([ni/nimble@b7e946b](https://github.com/ni/nimble/commit/b7e946be21b68e6b871096ec587defd543d6ce32))

## 15.5.2

Mon, 05 Dec 2022 19:44:44 GMT

### Patches

- Initial code scaffolding for nimble-table component ([ni/nimble@d77ed48](https://github.com/ni/nimble/commit/d77ed4830b75ecc68c3049e8f67f3d9bd07b5257))

## 15.5.1

Tue, 29 Nov 2022 17:43:35 GMT

### Patches

- Finished first iteration of the waferMap component and its storybook ([ni/nimble@001156d](https://github.com/ni/nimble/commit/001156d6c85f250a934ed8819b6a0650fe26eb84))

## 15.5.0

Wed, 23 Nov 2022 16:47:02 GMT

### Minor changes

- Computations functionality added to the WaferMap component ([ni/nimble@4676381](https://github.com/ni/nimble/commit/4676381ff77c04f47d23b2f2c315af17cd364fca))

## 15.4.0

Tue, 22 Nov 2022 09:29:17 GMT

### Minor changes

- Create placeholder WaferMap component ([ni/nimble@ac82536](https://github.com/ni/nimble/commit/ac8253677461f3591b18f36ead547ec9d8562cb3))

## 15.3.2

Mon, 14 Nov 2022 23:02:04 GMT

### Patches

- Adjust control height based on label presence ([ni/nimble@e9d9aee](https://github.com/ni/nimble/commit/e9d9aeee9512e189e9219c7b57be04852b0b87f7))

## 15.3.1

Fri, 11 Nov 2022 15:34:20 GMT

### Patches

- Add fade animation to drawer when prefers-reduced-motion is enabled ([ni/nimble@e6b385e](https://github.com/ni/nimble/commit/e6b385ef6ec2590ba101de4fa7ef54c5be0d569d))

## 15.3.0

Fri, 11 Nov 2022 14:59:30 GMT

### Minor changes

- Added triangle-filled, check-large, and dot-solid-dot-stroke-measurement icons ([ni/nimble@e752021](https://github.com/ni/nimble/commit/e75202147b35ee50f80cc37890ca397e35dc019e))
- Bump @ni/nimble-tokens to v4.3.0

## 15.2.0

Thu, 10 Nov 2022 23:25:26 GMT

### Minor changes

- Update `typescript` version. ([ni/nimble@843d837](https://github.com/ni/nimble/commit/843d8373064ad8389b54fe72a1cedda4091a7b7f))
- Bump @ni/nimble-tokens to v4.2.0

## 15.1.1

Tue, 25 Oct 2022 13:53:36 GMT

### Patches

- Bump @ni/nimble-tokens to v4.1.3

## 15.1.0

Tue, 18 Oct 2022 16:53:38 GMT

### Minor changes

- Implement error state for select ([ni/nimble@14c474e](https://github.com/ni/nimble/commit/14c474efc7dd3f27d26ef7d977d1885019d58a95))

## 15.0.0

Fri, 07 Oct 2022 21:13:41 GMT

### Major changes

- Rename nimble "radio button" to "radio" ([ni/nimble@8f496f0](https://github.com/ni/nimble/commit/8f496f0aaca48e5765e942292c88e78094e81386))

## 14.0.0

Thu, 06 Oct 2022 17:54:42 GMT

### Major changes

- - Extend styling on nimble-dialog by implementing a slotted template.
  - `aria-label` no longer correctly labels the dialog. Provide text content in the `title` and/or `subtitle` to give the dialog an accessible label.
  - Styling has changed. Update dialogs in one of the two ways:
      1. To lay out content using recommended patterns, use exposed slots of `title`, `subtitle`, and `footer` to lay out content using recommended patterns.
      2. To keep (nearly) identical layout as before this change:
          - set `header-hidden` and `footer-hidden` on the dialog
          - wrap the entire contents of the dialog in a single element, such as a `<div>` to avoid having the default flex layout applied to content
          - note: it is still recommended to provide a title/subtitle for accessibility purposes even when setting `header-hidden` ([ni/nimble@980a9da](https://github.com/ni/nimble/commit/980a9dac9961ef1487833281470f97c79f0f5197))

## 13.0.0

Tue, 04 Oct 2022 16:41:24 GMT

### Major changes

- Fix issues related to nimble-drawer by rewriting the template to use the HTML dialog ([ni/nimble@e31785b](https://github.com/ni/nimble/commit/e31785bf51ac6d2e2d188ee3dceed3d862565d3e))

## 12.0.2

Mon, 03 Oct 2022 22:16:20 GMT

### Patches

- Updating licenses to MIT ([ni/nimble@31021de](https://github.com/ni/nimble/commit/31021de203162ed44452ab54425946b220cf9f0f))
- Bump @ni/nimble-tokens to v4.1.2

## 12.0.1

Thu, 29 Sep 2022 20:33:02 GMT

### Patches

- Bump @ni/nimble-tokens to v4.1.1

## 12.0.0

Thu, 29 Sep 2022 20:03:25 GMT

### Major changes

- Migrated from CSS classes to element attributes for configuring components. For the list of specific elements and classes changed see: [#738](https://github.com/ni/nimble/pull/738). ([ni/nimble@9023d71](https://github.com/ni/nimble/commit/9023d71ddb4740a624e5b9eac0114a0c91fbca78))

## 11.15.1

Mon, 19 Sep 2022 19:10:55 GMT

### Patches

- Turn off @typescript-eslint/indent for styles.ts files ([ni/nimble@c7509f7](https://github.com/ni/nimble/commit/c7509f7321c3cf635ba9f346026c4e097079aa5c))

## 11.15.0

Thu, 15 Sep 2022 18:33:47 GMT

### Minor changes

- Export Orientation enum so it can be used as value ([ni/nimble@a04abdb](https://github.com/ni/nimble/commit/a04abdb9c8f58af14565752920b09aa002e53173))

## 11.14.0

Mon, 12 Sep 2022 20:18:53 GMT

### Minor changes

- Add nimble-radio-button and nimble-radio-group ([ni/nimble@5a160ef](https://github.com/ni/nimble/commit/5a160efcf22098a21420834470a511878c81f387))

## 11.13.1

Tue, 06 Sep 2022 20:09:58 GMT

### Patches

- Fix minor animation issues and add guidelines for prefers-reduce-motion ([ni/nimble@7b4a4f1](https://github.com/ni/nimble/commit/7b4a4f1b6b87bff5967ba9c7ce8dbabac9c2d33a))

## 11.13.0

Fri, 02 Sep 2022 17:48:33 GMT

### Minor changes

- Change backdrop overlay color for dialog and drawer ([ni/nimble@29a0456](https://github.com/ni/nimble/commit/29a0456ac99235f13cf5d09c5d0085a14da53661))

## 11.12.1

Tue, 30 Aug 2022 19:03:18 GMT

### Patches

- update nimble logos ([ni/nimble@96b2413](https://github.com/ni/nimble/commit/96b2413d2cec7cdf9a4a848ecbd7de6358ea2caa))

## 11.12.0

Tue, 30 Aug 2022 18:14:50 GMT

### Minor changes

- Adding USER_DISMISSED to Dialog class and avoid stale cached value ([ni/nimble@891b62c](https://github.com/ni/nimble/commit/891b62c4f672b51f6a3c82e77a428a59763bd09c))

## 11.11.0

Fri, 26 Aug 2022 14:00:36 GMT

### Minor changes

- Added IconBookMagnifyingGlass, IconCircleFilled, IconCloud, IconShareNodes, IconThreeVerticalLines icons ([ni/nimble@75b48c2](https://github.com/ni/nimble/commit/75b48c20131c2ac891ac50a766d9c3fb88c50718))
- Bump @ni/nimble-tokens to v4.1.0

## 11.10.6

Wed, 24 Aug 2022 22:18:14 GMT

### Patches

- Use correct colors in nimble-card-button on Color UI ([ni/nimble@f375ba9](https://github.com/ni/nimble/commit/f375ba91d4e19bd24b66a6f1d5393dd6c3a9f997))

## 11.10.5

Wed, 17 Aug 2022 18:59:48 GMT

### Patches

- Add token previews to storybook ([ni/nimble@bc7262c](https://github.com/ni/nimble/commit/bc7262c578faf4af964fba4d63a92445703ed2da))

## 11.10.4

Mon, 15 Aug 2022 15:50:12 GMT

### Patches

- Simple style change to support font-style ([ni/nimble@4753667](https://github.com/ni/nimble/commit/475366789d09c01b902a97f795b91e70a54b3efb))

## 11.10.3

Fri, 12 Aug 2022 19:14:22 GMT

### Patches

- Replicating updated design tokens ([ni/nimble@f293311](https://github.com/ni/nimble/commit/f2933114b1b89a3c8cdae5d26d4a4779e1972596))

## 11.10.2

Thu, 11 Aug 2022 22:20:09 GMT

### Patches

- Remove delegatesFocus from dialog ([ni/nimble@ab34f42](https://github.com/ni/nimble/commit/ab34f42e9602c20bef3fa3b49a8d82630aeca880))

## 11.10.1

Thu, 11 Aug 2022 20:28:40 GMT

### Patches

- Specify tslib version ([ni/nimble@7858f31](https://github.com/ni/nimble/commit/7858f3155a4f9f774e79bc303641b39d7a05f1f9))

## 11.10.0

Wed, 10 Aug 2022 21:38:38 GMT

### Minor changes

- Add Appearance to Combobox. ([ni/nimble@32b4ed9](https://github.com/ni/nimble/commit/32b4ed97aaaea52ff211118a405fd34922a3c0cd))

## 11.9.0

Wed, 10 Aug 2022 17:05:04 GMT

### Minor changes

- Add nimble-dialog component ([ni/nimble@fd2f531](https://github.com/ni/nimble/commit/fd2f53162c9d194b943f8573eb140539eb0eccbc))

## 11.8.5

Tue, 09 Aug 2022 22:19:14 GMT

### Patches

- Combobox text input updates value. ([ni/nimble@f232213](https://github.com/ni/nimble/commit/f232213f3f0078a7a97879e2fd8f49937e14eef4))

## 11.8.4

Tue, 09 Aug 2022 18:05:33 GMT

### Patches

- Remove custom text selection styling ([ni/nimble@fd627f2](https://github.com/ni/nimble/commit/fd627f21dee853ce1e6d77196c673f28d58e2daa))

## 11.8.3

Tue, 09 Aug 2022 15:57:14 GMT

### Patches

- Remove tab focus from button in combobox. ([ni/nimble@56ee1ee](https://github.com/ni/nimble/commit/56ee1eeb21568b86a6e5b351d1f1985e23d228dc))

## 11.8.2

Tue, 09 Aug 2022 00:07:50 GMT

### Patches

- theme and appearance behaviors refactor ([ni/nimble@9a2f491](https://github.com/ni/nimble/commit/9a2f49176f39b5e9027486b89a9a910f7a68f454))

## 11.8.1

Mon, 01 Aug 2022 17:54:58 GMT

### Patches

- Fix focus styling on breadcrumb items ([ni/nimble@056605c](https://github.com/ni/nimble/commit/056605c8deebb7dba01bbac1a86dd0a1d670c5e3))

## 11.8.0

Thu, 28 Jul 2022 21:21:12 GMT

### Minor changes

- Create nimble-card-button component ([ni/nimble@00c328d](https://github.com/ni/nimble/commit/00c328dcae2cdaa93505cfe81e92d7019e34423b))

## 11.7.2

Thu, 28 Jul 2022 20:37:04 GMT

### Patches

- Bump @ni/nimble-tokens to v4.0.1

## 11.7.1

Wed, 27 Jul 2022 15:38:00 GMT

### Patches

- Update fast-foundation. ([ni/nimble@8b1dc12](https://github.com/ni/nimble/commit/8b1dc127df77135a98f0a954b16337c718849c30))

## 11.7.0

Wed, 27 Jul 2022 00:53:31 GMT

### Minor changes

- Implementation of the different states of the Nimble Tooltip. ([ni/nimble@5142136](https://github.com/ni/nimble/commit/5142136ea7753d4a71c7047c86fdc05bab2ed66f))

## 11.6.2

Mon, 25 Jul 2022 18:44:33 GMT

### Patches

- Adding option to Combobox Storybook. Fix styling for empty options. ([ni/nimble@9039cd2](https://github.com/ni/nimble/commit/9039cd29ed7223123aa7b3a09ac5ee90ec2c388a))

## 11.6.1

Fri, 22 Jul 2022 14:58:44 GMT

### Patches

- Minor style fix to combobox. Resolves #639. ([ni/nimble@ea1854a](https://github.com/ni/nimble/commit/ea1854aba1c043971e9348b39e6f525b0456a10a))

## 11.6.0

Wed, 20 Jul 2022 18:41:04 GMT

### Minor changes

- adding block and outline appearances to select ([ni/nimble@a188d7b](https://github.com/ni/nimble/commit/a188d7baa54e1061ad07ffa65b0e5d0a2b495238))

## 11.5.0

Mon, 18 Jul 2022 15:25:53 GMT

### Minor changes

- Adding invalid state support to number field ([ni/nimble@7dcb1af](https://github.com/ni/nimble/commit/7dcb1af22c1827320b2516e9b967830f3295e86a))

## 11.4.1

Fri, 15 Jul 2022 21:12:50 GMT

### Patches

- Fix icon colors for the Color theme.(#629) ([ni/nimble@aa729cc](https://github.com/ni/nimble/commit/aa729cc29ca4969f14f4ab9313c3abdac2c8b248))

## 11.4.0

Mon, 27 Jun 2022 17:17:28 GMT

### Minor changes

- New token for divider background color ([ni/nimble@12ed391](https://github.com/ni/nimble/commit/12ed391e04e9bdaac550d401704d54e0b6a10e83))

## 11.3.0

Fri, 24 Jun 2022 15:18:24 GMT

### Minor changes

- Implementation, styling, and tests for the 'default' state of the nimble-tooltip. ([ni/nimble@70e8d55](https://github.com/ni/nimble/commit/70e8d554250b8abc4ce7bdc069dcbf28107fee7c))

## 11.2.0

Thu, 23 Jun 2022 18:40:01 GMT

### Minor changes

- Add appearances and update inc/dec for number field ([ni/nimble@2678f74](https://github.com/ni/nimble/commit/2678f7470e090ed20520a4cd98fc07a8c2ab995b))

## 11.1.1

Mon, 20 Jun 2022 23:17:47 GMT

### Patches

- Restore animation growing from center ([ni/nimble@bb4b2b4](https://github.com/ni/nimble/commit/bb4b2b405cacb7960714617c8863fbdbb6fb2d74))

## 11.1.0

Mon, 20 Jun 2022 20:39:36 GMT

### Minor changes

- Add Combobox component ([ni/nimble@d6af9e7](https://github.com/ni/nimble/commit/d6af9e70b1058f46e6726f1caf22092523a0ff24))

## 11.0.4

Thu, 16 Jun 2022 18:11:31 GMT

### Patches

- Fix bug where menu-button could accidentally hide the button's content ([ni/nimble@74a9b60](https://github.com/ni/nimble/commit/74a9b600ec41d4a0372dfe863f0ee5705c65aafb))

## 11.0.3

Wed, 15 Jun 2022 19:12:55 GMT

### Patches

- Keyboard focus styling for select ([ni/nimble@3a3780e](https://github.com/ni/nimble/commit/3a3780e4676fd32ff9d89c0ed7c455c1ce0f6f81))

## 11.0.2

Mon, 13 Jun 2022 22:34:57 GMT

### Patches

- Text/Number fields hover indicator grows from middle ([ni/nimble@c930471](https://github.com/ni/nimble/commit/c930471568477d0b665ce9039cd13a73511b5c8e))

## 11.0.1

Tue, 07 Jun 2022 15:43:41 GMT

### Patches

- Fix select drop-down clipping ([ni/nimble@c7a0202](https://github.com/ni/nimble/commit/c7a0202b1f1980159f9e14cbac69e6172ccec075))

## 11.0.0

Thu, 02 Jun 2022 15:11:56 GMT

### Major changes

- Icon names updated from the postfix nimble-*-icon to the prefix nimble-icon-*. ([ni/nimble@7d7416e](https://github.com/ni/nimble/commit/7d7416ecb6f539feed219221c905b7365c8c7f79))

## 10.0.9

Tue, 31 May 2022 17:03:58 GMT

### Patches

- Use new nimble-token icon paths. See nimble-tokens changes if using fonts.css directly from nimble-tokens. ([ni/nimble@eeb6783](https://github.com/ni/nimble/commit/eeb6783dd96e74365350826b44592c403ef8376d))
- Bump @ni/nimble-tokens to v4.0.0

## 10.0.8

Fri, 27 May 2022 15:39:30 GMT

### Patches

- Bump @ni/nimble-tokens to v3.2.4

## 10.0.7

Mon, 23 May 2022 21:59:32 GMT

### Patches

- Bump @ni/nimble-tokens to v3.2.3

## 10.0.6

Mon, 23 May 2022 19:28:21 GMT

### Patches

- Bump @ni/nimble-tokens to v3.2.2

## 10.0.5

Mon, 23 May 2022 17:08:16 GMT

### Patches

- Export nimble-menu-button from all-components ([ni/nimble@717f2fb](https://github.com/ni/nimble/commit/717f2fbd251509bb8deee23c842dceb5c4325c84))

## 10.0.4

Mon, 23 May 2022 15:27:37 GMT

### Patches

- Fix icon opacity for disabled buttons ([ni/nimble@977fb31](https://github.com/ni/nimble/commit/977fb31dfaffefbd30bf142eaa5a8f37e2ef6041))

## 10.0.3

Wed, 18 May 2022 22:20:28 GMT

### Patches

- Focus menu-button in capture phase of event handler ([ni/nimble@382b7be](https://github.com/ni/nimble/commit/382b7bec724966de8edc356a453783861aaa560d))

## 10.0.2

Wed, 18 May 2022 20:52:01 GMT

### Patches

- Remove unused dist output ([ni/nimble@d6fdd7c](https://github.com/ni/nimble/commit/d6fdd7ce77c264d72f885b2a734a692dc1938e71))
- Bump @ni/nimble-tokens to v3.2.1

## 10.0.1

Wed, 18 May 2022 20:19:53 GMT

### Patches

- Update dark theme token value for header background color ([ni/nimble@93810d5](https://github.com/ni/nimble/commit/93810d5d61bdff39451918bbc4a463db57505e27))

## 10.0.0

Wed, 18 May 2022 19:45:57 GMT

### Major changes

- 1. Rename enum options to use camelCase instead of PascalCase to improve API consistency.
2. change all enums to use const object and string union pattern.
3. Renamed string unions named `*Attribute` to remove the word `Attribute`. ([ni/nimble@1626a16](https://github.com/ni/nimble/commit/1626a16c850dd5f47a6e05d23f2829a56a634554))

## 9.0.4

Tue, 17 May 2022 22:28:41 GMT

### Patches

- Update import/formatting of tokens SCSS ([ni/nimble@c254c00](https://github.com/ni/nimble/commit/c254c00cda2686d3f0eb872d961a8847fa571c10))

## 9.0.3

Tue, 17 May 2022 16:02:58 GMT

### Patches

- No longer require clients to manually import nimble-toggle-button and nimble-anchored-region when using nimble-menu-button ([ni/nimble@e7a22c8](https://github.com/ni/nimble/commit/e7a22c8fc760f51ebc0d7e56d564576628776456))

## 9.0.2

Tue, 17 May 2022 15:15:50 GMT

### Patches

- Support submenus in nimble-menu ([ni/nimble@6d709f5](https://github.com/ni/nimble/commit/6d709f50703d92fe285229f24e809bcbba84a8c6))

## 9.0.1

Mon, 16 May 2022 22:54:32 GMT

### Patches

- Avoid disabled text field ellipsized text overflow bug ([ni/nimble@ec41017](https://github.com/ni/nimble/commit/ec410175429ce61496f554dde33245c2ed5bb917))

## 9.0.0

Thu, 12 May 2022 18:39:55 GMT

### Major changes

- Fix drawer footer layout on Safari. Clients providing the drawer a header, section, and footer must now provide them in that order. They will be displayed in the order given ([ni/nimble@0413ad2](https://github.com/ni/nimble/commit/0413ad227ca26c4798f9551a43481220f3a08852))

## 8.6.3

Thu, 12 May 2022 18:16:13 GMT

### Patches

- Fix a few cosmetic issues with tabs ([ni/nimble@a85233a](https://github.com/ni/nimble/commit/a85233a89ca31819e5861044d6c7af240db33933))

## 8.6.2

Tue, 10 May 2022 21:09:37 GMT

### Patches

- Update FAST dependency versions ([ni/nimble@765f2f5](https://github.com/ni/nimble/commit/765f2f5f4cd28592e16e163e0d4e4afa9a87b9a7))

## 8.6.1

Tue, 10 May 2022 20:40:12 GMT

### Patches

- Use LargeDelay token ([ni/nimble@54618fa](https://github.com/ni/nimble/commit/54618faeb76695e0480cb94c558d0818fa77ded8))
- Bump @ni/nimble-tokens to v3.2.0

## 8.6.0

Tue, 10 May 2022 19:19:34 GMT

### Minor changes

- Create nimble-menu-button component ([ni/nimble@c4bb268](https://github.com/ni/nimble/commit/c4bb26837c1b6570d2dd8d09597a90d6f8eaf34c))

## 8.5.0

Mon, 09 May 2022 16:30:15 GMT

### Minor changes

- Support clear-inline-padding class on frameless text field ([ni/nimble@9cd7e2b](https://github.com/ni/nimble/commit/9cd7e2b65f2c110358ea840e35791f9b45483968))

## 8.4.0

Wed, 04 May 2022 21:26:02 GMT

### Minor changes

- Create nimble-anchored-region ([ni/nimble@653341a](https://github.com/ni/nimble/commit/653341a69d93c7e4aaf09e601962bca50aec0967))

## 8.3.0

Mon, 02 May 2022 21:17:05 GMT

### Minor changes

- Added mousedown fill color ([ni/nimble@8221a0c](https://github.com/ni/nimble/commit/8221a0c79dde412326b2358add1a521894035e75))

## 8.2.1

Fri, 29 Apr 2022 20:41:59 GMT

### Patches

- Reflect ARIA attributes from toggle-button onto inner control ([ni/nimble@9ffe14d](https://github.com/ni/nimble/commit/9ffe14dc5c32a24e60b0a8b1e1db44a331af1350))

## 8.2.0

Fri, 29 Apr 2022 19:30:37 GMT

### Minor changes

- Show start slot on text field ([ni/nimble@f3f3545](https://github.com/ni/nimble/commit/f3f35459c1bf71a433c5b892803a01b129155f4a))

## 8.1.11

Fri, 29 Apr 2022 15:27:01 GMT

### Patches

- Bump @ni/nimble-tokens to v3.1.0

## 8.1.10

Sat, 23 Apr 2022 05:05:02 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.13

## 8.1.9

Sat, 23 Apr 2022 04:31:01 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.12

## 8.1.8

Sat, 23 Apr 2022 04:15:08 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.11

## 8.1.4

Fri, 22 Apr 2022 22:36:24 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.7

## 8.1.3

Fri, 22 Apr 2022 16:09:27 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.6

## 8.1.2

Fri, 22 Apr 2022 15:09:11 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.4

## 8.1.1

Fri, 22 Apr 2022 14:26:36 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.3

## 8.1.0

Fri, 22 Apr 2022 12:45:44 GMT

### Minor changes

- Add frameless appearance to nimble-text-field (7282195+m-akinc@users.noreply.github.com)

## 8.0.2

Thu, 21 Apr 2022 20:57:24 GMT

### Patches

- Fix minified source map generation (rajsite@users.noreply.github.com)
- Bump @ni/nimble-tokens to v3.0.2

## 8.0.1

Wed, 13 Apr 2022 23:09:34 GMT

### Patches

- Enforce tree selection mode when using keyboard (20542556+mollykreis@users.noreply.github.com)

## 8.0.0

Wed, 13 Apr 2022 21:55:47 GMT

### Major changes

- Changing nimble-listbox-option to nimble-list-option (26874831+atmgrifter00@users.noreply.github.com)

## 7.8.3

Wed, 13 Apr 2022 20:50:06 GMT

### Patches

- Adding nimble toolbar to allComponents (26874831+atmgrifter00@users.noreply.github.com)

## 7.8.2

Tue, 12 Apr 2022 19:28:50 GMT

### Patches

- Remove nested specific styling from tree items (20542556+mollykreis@users.noreply.github.com)

## 7.8.1

Tue, 12 Apr 2022 18:29:27 GMT

### Patches

- Correct hover color of active tree group (20542556+mollykreis@users.noreply.github.com)

## 7.8.0

Mon, 11 Apr 2022 21:45:54 GMT

### Minor changes

- Add 'none' selection mode to tree (20542556+mollykreis@users.noreply.github.com)

## 7.7.0

Thu, 07 Apr 2022 19:57:34 GMT

### Minor changes

- Add styling for indeterminate checkbox state (7282195+m-akinc@users.noreply.github.com)

## 7.6.0

Wed, 06 Apr 2022 19:38:49 GMT

### Minor changes

- nimble-drawer has cancelable 'cancel' event (triggered when dimming overlay is clicked, when modal = true) (20709258+msmithNI@users.noreply.github.com)

## 7.5.0

Fri, 01 Apr 2022 18:39:28 GMT

### Minor changes

- Add ability to place buttons within a text field (20542556+mollykreis@users.noreply.github.com)

## 7.4.3

Thu, 31 Mar 2022 21:02:24 GMT

### Patches

- nimble-text-area honor height and width (7282195+m-akinc@users.noreply.github.com)

## 7.4.2

Thu, 31 Mar 2022 18:58:20 GMT

### Patches

- Added descriptive tags to icon metadata file (1458528+fredvisser@users.noreply.github.com)

## 7.4.1

Thu, 31 Mar 2022 18:03:04 GMT

### Patches

- Fix bug in nimble-select when options change (20542556+mollykreis@users.noreply.github.com)

## 7.4.0

Thu, 24 Mar 2022 01:16:17 GMT

### Minor changes

- Add bundled distribution file to package (5454342+brianehenry@users.noreply.github.com)

## 7.3.0

Wed, 23 Mar 2022 18:49:06 GMT

### Minor changes

- Create nimble-toolbar component (20542556+mollykreis@users.noreply.github.com)

## 7.2.3

Tue, 22 Mar 2022 20:59:12 GMT

### Patches

- Update FAST dependencies. Fix issues. (26874831+atmgrifter00@users.noreply.github.com)

## 7.2.2

Fri, 18 Mar 2022 19:18:02 GMT

### Patches

- Fix button width and height styles (20542556+mollykreis@users.noreply.github.com)

## 7.2.1

Wed, 16 Mar 2022 22:20:10 GMT

### Patches

- Fix hover style of block button (20542556+mollykreis@users.noreply.github.com)

## 7.2.0

Wed, 16 Mar 2022 21:51:34 GMT

### Minor changes

- Add support for icons in 'end' slot of nimble-button and nimble-toggle-button (20542556+mollykreis@users.noreply.github.com)

## 7.1.1

Wed, 16 Mar 2022 18:56:43 GMT

### Patches

- Icon button use hidden content as a11y name (7282195+m-akinc@users.noreply.github.com)

## 7.1.0

Mon, 14 Mar 2022 16:43:20 GMT

### Minor changes

- Create switch component (5454342+brianehenry@users.noreply.github.com)

## 7.0.1

Fri, 11 Mar 2022 16:23:10 GMT

### Patches

- Switch to released 6.0.0 of storybook-addon-xd-designs (7282195+m-akinc@users.noreply.github.com)

## 7.0.0

Fri, 11 Mar 2022 00:51:41 GMT

### Major changes

- Change nimble-breadcrumb CSS class from "style-2" to "prominent-links" (to get alt link color style); add that style to breadcrumb theme matrix (20709258+msmithNI@users.noreply.github.com)

## 6.1.5

Thu, 10 Mar 2022 19:42:54 GMT

### Patches

- Fix bug where incorrect theme can be applied to breadcrumb/textfield if 2 theme providers/ themes are active on a page (20709258+msmithNI@users.noreply.github.com)

## 6.1.4

Wed, 09 Mar 2022 22:20:03 GMT

### Patches

- Bump @ni/nimble-tokens to v3.0.1

## 6.1.3

Tue, 08 Mar 2022 16:17:42 GMT

### Patches

- Inherit font properties from nimble-text-field element (7282195+m-akinc@users.noreply.github.com)

## 6.1.2

Fri, 04 Mar 2022 21:15:36 GMT

### Patches

- Add final styling for breadcrumb. nimble-breadcrumb allows swapping to 2nd style (swaps link regular/mousedown colors) via style-2 CSS class. (20709258+msmithNI@users.noreply.github.com)

## 6.1.1

Fri, 04 Mar 2022 20:46:39 GMT

### Patches

- Don't tie error display to invalid state (7282195+m-akinc@users.noreply.github.com)

## 6.1.0

Wed, 02 Mar 2022 17:00:45 GMT

### Minor changes

- Adding new font tokens (26874831+atmgrifter00@users.noreply.github.com)

## 6.0.0

Tue, 01 Mar 2022 19:24:47 GMT

### Major changes

- Rename text field attribute from errortext to error-text (7282195+m-akinc@users.noreply.github.com)

## 5.0.1

Tue, 01 Mar 2022 18:23:44 GMT

### Patches

- Initialize properties for nimble owned properties like appearance modes and theme provider. (rajsite@users.noreply.github.com)

## 5.0.0

Tue, 01 Mar 2022 16:07:33 GMT

### Major changes

- Renamed fillHoverSelectedColor & fillSelectedColor tokens. (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-tokens to v3.0.0

## 4.1.0

Tue, 01 Mar 2022 15:14:49 GMT

### Minor changes

- Support error text on nimble-text-field (7282195+m-akinc@users.noreply.github.com)

## 4.0.1

Thu, 24 Feb 2022 19:17:00 GMT

### Patches

- Use correct padding in select component (20542556+mollykreis@users.noreply.github.com)

## 4.0.0

Thu, 24 Feb 2022 16:20:16 GMT

### Major changes

- Added icons, [updated names](https://nio365-my.sharepoint.com/:x:/g/personal/fred_visser_ni_com/EXICQZuUaOBHiJEj7G55E0EBsLshTmfYM6TIfAKD5Jo7bA?e=fucw97) of existing icons, implemented code generation for icons (5454342+brianehenry@users.noreply.github.com)

## 3.2.0

Wed, 23 Feb 2022 22:30:22 GMT

### Minor changes

- Add new nimble-breadcrumb and nimble-breadcrumb-item components (20709258+msmithNI@users.noreply.github.com)

## 3.1.0

Wed, 23 Feb 2022 22:01:52 GMT

### Minor changes

- Implement primary buttons (20542556+mollykreis@users.noreply.github.com)

## 3.0.0

Wed, 23 Feb 2022 20:10:44 GMT

### Major changes

- Refactored nearly all theme-aware tokens. See this [spreadsheet](https://nio365-my.sharepoint.com/:x:/g/personal/fred_visser_ni_com/EXICQZuUaOBHiJEj7G55E0EBsLshTmfYM6TIfAKD5Jo7bA?e=fucw97) for a mapping of old and new tokens. (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-tokens to v2.1.0

## 2.1.3

Mon, 21 Feb 2022 23:14:18 GMT

### Patches

- Fix minor hover issue for text area on Safari (7282195+m-akinc@users.noreply.github.com)

## 2.1.2

Mon, 21 Feb 2022 15:34:13 GMT

### Patches

- Updating with [renamed](https://nio365-my.sharepoint.com/:x:/g/personal/fred_visser_ni_com/EXICQZuUaOBHiJEj7G55E0EBsLshTmfYM6TIfAKD5Jo7bA?e=fucw97) icons from nimble-tokens (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-tokens to v2.0.0

## 2.1.1

Sat, 19 Feb 2022 00:06:17 GMT

### Patches

- Bump @ni/nimble-tokens to v1.1.0

## 2.1.0

Thu, 17 Feb 2022 19:43:53 GMT

### Minor changes

- Implement nimble-text-area component (7282195+m-akinc@users.noreply.github.com)

## 2.0.2

Thu, 17 Feb 2022 17:30:49 GMT

### Patches

- Update readonly text field style (7282195+m-akinc@users.noreply.github.com)

## 2.0.1

Thu, 17 Feb 2022 03:15:59 GMT

### Patches

- Fix focus bug with nimble-toggle-button (20542556+mollykreis@users.noreply.github.com)

## 2.0.0

Tue, 15 Feb 2022 17:32:39 GMT

### Major changes

- remove legacy blue (1458528+fredvisser@users.noreply.github.com)

## 1.2.0

Mon, 14 Feb 2022 21:34:16 GMT

### Minor changes

- Add additional Outline and Block text field appearances (7282195+m-akinc@users.noreply.github.com)

## 1.1.2

Mon, 14 Feb 2022 18:58:21 GMT

### Patches

- add max-height for select menu (1458528+fredvisser@users.noreply.github.com)

## 1.1.1

Fri, 11 Feb 2022 16:48:53 GMT

### Patches

- FAST version update (rajsite@users.noreply.github.com)

## 1.1.0

Tue, 08 Feb 2022 22:38:10 GMT

### Minor changes

- Create nimble-toggle-button (20542556+mollykreis@users.noreply.github.com)

## 1.0.0

Mon, 07 Feb 2022 18:48:57 GMT

### Patches

- Remove 'beta' tag from package to start using semantic versioning (jattasNI@users.noreply.github.com)
- Bump @ni/nimble-tokens to v1.0.0

## 1.0.0-beta.129

Fri, 04 Feb 2022 23:44:50 GMT

### Changes

- ThemeStyleSheetBehavior implmentation
- **Breaking change**: NimbleThemeProvider renamed to ThemeProvider. NimbleTheme renamed to Theme. Removed passwordRevealFilter design token. (rajsite@users.noreply.github.com)

## 1.0.0-beta.128

Wed, 02 Feb 2022 16:29:26 GMT

### Changes

- Add status icon components (32167177+haworthia@users.noreply.github.com)

## 1.0.0-beta.127

Tue, 01 Feb 2022 17:09:06 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.39

## 1.0.0-beta.126

Fri, 28 Jan 2022 21:45:26 GMT

### Changes

- Theme-aware token scss file generation.
 - Users should switch from CSS properties to SCSS properties so any token changes during upgrades can be detected at build time.
 - **Breaking change**: Theme-aware CSS custom properties now have prefix --ni-nimble-*. (rajsite@users.noreply.github.com)

## 1.0.0-beta.125

Thu, 20 Jan 2022 21:30:14 GMT

### Changes

- Remove default slot from Nimble icons. This is a breaking change. Clients using Nimble icons inside Nimble buttons, menu items, or tree items must now explicitly set the 'slot' attribute on those icons to 'start' in order for them to be styled properly. (7282195+m-akinc@users.noreply.github.com)

## 1.0.0-beta.124

Thu, 20 Jan 2022 04:13:54 GMT

### Changes

- Add contentHidden attribute to button rather than implicitly determine a button has no text content (20542556+mollykreis@users.noreply.github.com)

## 1.0.0-beta.123

Wed, 19 Jan 2022 23:57:51 GMT

### Changes

- Documentation of theming system (jattasNI@users.noreply.github.com)
- Bump @ni/nimble-tokens to v1.0.0-beta.38

## 1.0.0-beta.122

Thu, 13 Jan 2022 19:48:52 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.37

## 1.0.0-beta.121

Wed, 12 Jan 2022 19:57:11 GMT

### Changes

- Increase test cases covered by button matrix stories (20542556+mollykreis@users.noreply.github.com)

## 1.0.0-beta.120

Tue, 11 Jan 2022 22:03:36 GMT

### Changes

- Correct styling of icon buttons (20542556+mollykreis@users.noreply.github.com)

## 1.0.0-beta.119

Mon, 10 Jan 2022 18:14:33 GMT

### Changes

- Turn on strict type checking and resolve violations (7282195+m-akinc@users.noreply.github.com)

## 1.0.0-beta.118

Fri, 07 Jan 2022 00:04:56 GMT

### Changes

- Add baseClass in call to compose for Button and Select (7282195+m-akinc@users.noreply.github.com)

## 1.0.0-beta.117

Thu, 06 Jan 2022 23:21:51 GMT

### Changes

- Don't hardcode nimble-listbox-option in query (7282195+m-akinc@users.noreply.github.com)

## 1.0.0-beta.116

Thu, 06 Jan 2022 19:28:47 GMT

### Changes

- Refactor prefers-reduced-motion watching logic into utility (7282195+m-akinc@users.noreply.github.com)

## 1.0.0-beta.115

Fri, 17 Dec 2021 22:32:22 GMT

### Changes

- Update versions of @ni/javascript-styleguide dependencies (jattasNI@users.noreply.github.com)
- Bump @ni/nimble-tokens to v1.0.0-beta.36

## 1.0.0-beta.114

Wed, 15 Dec 2021 20:22:01 GMT

### Changes

- Add HTMLElementTagNameMap extensions for Nimble elements (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.113

Tue, 14 Dec 2021 04:09:05 GMT

### Changes

- Re-export FAST's DOM.processUpdates method (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.112

Mon, 13 Dec 2021 20:30:22 GMT

### Changes

- Directive attribute string support and type export (rajsite@users.noreply.github.com)

## 1.0.0-beta.111

Mon, 13 Dec 2021 14:41:26 GMT

### Changes

- Use legacy font family var in legacy theme (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.110

Fri, 10 Dec 2021 16:32:53 GMT

### Changes

- Improve usage docs for nimble-components (jattasNI@users.noreply.github.com)

## 1.0.0-beta.109

Thu, 09 Dec 2021 20:35:29 GMT

### Changes

- Update publish command (rajsite@users.noreply.github.com)
- Bump @ni/nimble-tokens to v1.0.0-beta.35

## 1.0.0-beta.108

Wed, 08 Dec 2021 00:40:11 GMT

### Changes

- Update TreeItem to prevent future breakage (26874831+atmgrifter00@users.noreply.github.com)

## 1.0.0-beta.107

Tue, 07 Dec 2021 16:36:46 GMT

### Changes

- Add Roboto font and token for legacy content font (5454342+brianehenry@users.noreply.github.com)
- Bump @ni/nimble-tokens to v1.0.0-beta.34

## 1.0.0-beta.106

Mon, 06 Dec 2021 19:56:32 GMT

### Changes

- upgrade to 6.4 final (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.105

Fri, 03 Dec 2021 20:54:09 GMT

### Changes

- Drawer updates (bugfix for content/footer mode, make drawer width configurable in Storybook) (20709258+msmithNI@users.noreply.github.com)

## 1.0.0-beta.104

Fri, 03 Dec 2021 18:58:22 GMT

### Changes

- Add icons for succeeded and fail (32167177+haworthia@users.noreply.github.com)

## 1.0.0-beta.103

Wed, 01 Dec 2021 17:51:36 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.33

## 1.0.0-beta.102

Wed, 01 Dec 2021 15:38:13 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.32

## 1.0.0-beta.101

Mon, 29 Nov 2021 20:17:04 GMT

### Changes

- Update documentation (jattasNI@users.noreply.github.com)
- Bump @ni/nimble-tokens to v1.0.0-beta.31

## 1.0.0-beta.100

Mon, 29 Nov 2021 19:31:25 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.30

## 1.0.0-beta.99

Tue, 23 Nov 2021 01:46:37 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.29

## 1.0.0-beta.98

Tue, 23 Nov 2021 01:15:54 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.28

## 1.0.0-beta.97

Tue, 23 Nov 2021 00:41:11 GMT

### Changes

- Bump @ni/nimble-tokens to v1.0.0-beta.27

## 1.0.0-beta.96

Tue, 23 Nov 2021 00:23:48 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.96 (rajsite@users.noreply.github.com)

## 1.0.0-beta.95

Tue, 23 Nov 2021 00:05:58 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.95 (rajsite@users.noreply.github.com)

## 1.0.0-beta.94

Mon, 22 Nov 2021 21:49:37 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.94 (rajsite@users.noreply.github.com)

## 1.0.0-beta.93

Mon, 22 Nov 2021 20:29:22 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.93 (rajsite@users.noreply.github.com)

## 1.0.0-beta.92

Fri, 19 Nov 2021 16:42:10 GMT

### Changes

- Make hidden styling consistent (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.91

Wed, 10 Nov 2021 17:31:11 GMT

### Changes

- update DSP from XD and change logo (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.91 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.90

Tue, 02 Nov 2021 14:46:47 GMT

### Changes

- updated component docs (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.89

Wed, 27 Oct 2021 16:30:36 GMT

### Changes

- Drawer fires state-change event when state property changes; update drawer CSS (to work better when non-modal) (20709258+msmithNI@users.noreply.github.com)

## 1.0.0-beta.88

Tue, 26 Oct 2021 19:50:21 GMT

### Changes

- Test utility folder layout (rajsite@users.noreply.github.com)

## 1.0.0-beta.87

Tue, 26 Oct 2021 16:10:28 GMT

### Changes

- TreeView/TreeItem refactor (26874831+atmgrifter00@users.noreply.github.com)

## 1.0.0-beta.86

Mon, 25 Oct 2021 18:06:36 GMT

### Changes

- Render storybook as string (rajsite@users.noreply.github.com)

## 1.0.0-beta.85

Mon, 25 Oct 2021 15:12:50 GMT

### Changes

- Include angular build in storybook (rajsite@users.noreply.github.com)

## 1.0.0-beta.84

Wed, 20 Oct 2021 23:37:42 GMT

### Changes

- Sidenav/Drawer component (20709258+msmithNI@users.noreply.github.com)

## 1.0.0-beta.83

Wed, 20 Oct 2021 19:37:53 GMT

### Changes

- Added styling and support for headers and non-interactive items in nimble-menu. (35616474+michaeldbrandt@users.noreply.github.com)

## 1.0.0-beta.82

Wed, 20 Oct 2021 00:24:57 GMT

### Changes

- Integrate nimble icons (rajsite@users.noreply.github.com)

## 1.0.0-beta.81

Tue, 19 Oct 2021 20:01:50 GMT

### Changes

- Export types for tab-related elements (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.80

Thu, 14 Oct 2021 19:47:51 GMT

### Changes

- Added styling to allow icons in the start slot of the nimble-menu. (35616474+michaeldbrandt@users.noreply.github.com)

## 1.0.0-beta.79

Thu, 14 Oct 2021 16:03:43 GMT

### Changes

- Initial pass at set of icon components. (26874831+atmgrifter00@users.noreply.github.com)

## 1.0.0-beta.78

Thu, 14 Oct 2021 15:34:51 GMT

### Changes

- Tree Group Selection behavior. (26874831+atmgrifter00@users.noreply.github.com)

## 1.0.0-beta.77

Wed, 13 Oct 2021 18:29:44 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.77 (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.76

Mon, 11 Oct 2021 23:26:07 GMT

### Changes

- CSS Guidelines super rough draft (rajsite@users.noreply.github.com)

## 1.0.0-beta.75

Mon, 11 Oct 2021 21:29:26 GMT

### Changes

- remove unnecessary metas and typo (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.74

Mon, 11 Oct 2021 19:53:26 GMT

### Changes

- add medium-delay token/animation to focus state (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.74 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.73

Mon, 11 Oct 2021 16:48:30 GMT

### Changes

- Make tabs inline flex (rajsite@users.noreply.github.com)

## 1.0.0-beta.72

Fri, 08 Oct 2021 20:59:39 GMT

### Changes

- add height to tab-toolbar (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.71

Thu, 07 Oct 2021 22:14:29 GMT

### Changes

- Fixed contents of disabled fields shifting on hover  (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.70

Thu, 07 Oct 2021 21:18:11 GMT

### Changes

- First pass at the menu (35616474+michaeldbrandt@users.noreply.github.com)

## 1.0.0-beta.69

Thu, 07 Oct 2021 20:27:57 GMT

### Changes

- Fix title in storybook (jattasNI@users.noreply.github.com)

## 1.0.0-beta.68

Thu, 07 Oct 2021 20:02:52 GMT

### Changes

- Nimble TreeItem now fires expanded-change when tree item content is clicked (already did so when expand/collapse glyph was clicked) (20709258+msmithNI@users.noreply.github.com)

## 1.0.0-beta.67

Thu, 07 Oct 2021 19:14:44 GMT

### Changes

- Use createRenderer helper for html tagged template (rajsite@users.noreply.github.com)

## 1.0.0-beta.66

Tue, 05 Oct 2021 20:50:12 GMT

### Changes

- Move storybook addon xd to root (rajsite@users.noreply.github.com)

## 1.0.0-beta.65

Thu, 30 Sep 2021 17:53:18 GMT

### Changes

- Update icons and callers (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.65 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.64

Thu, 30 Sep 2021 16:40:43 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.64 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.63

Wed, 29 Sep 2021 20:17:48 GMT

### Changes

- Remove manually added peer dependencies (rajsite@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.63 (rajsite@users.noreply.github.com)

## 1.0.0-beta.62

Tue, 28 Sep 2021 16:05:04 GMT

### Changes

- Refactored invalid property on text field to class (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.61

Mon, 27 Sep 2021 15:05:02 GMT

### Changes

- Switch to html template (rajsite@users.noreply.github.com)

## 1.0.0-beta.60

Fri, 24 Sep 2021 19:09:11 GMT

### Changes

- Introducing new select/expand behavior (26874831+atmgrifter00@users.noreply.github.com)

## 1.0.0-beta.59

Thu, 23 Sep 2021 20:37:34 GMT

### Changes

- Changes to support icons in nimble button (26874831+atmgrifter00@users.noreply.github.com)

## 1.0.0-beta.58

Thu, 23 Sep 2021 19:34:21 GMT

### Changes

- nimble tree view and item with rough styling (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.57

Wed, 22 Sep 2021 23:22:04 GMT

### Changes

- Re-export FAST's DOM.nextUpdate() for usage in Angular tests (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.56

Wed, 22 Sep 2021 17:04:37 GMT

### Changes

- re-enable theme switch and doc changes (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.55

Wed, 22 Sep 2021 16:46:58 GMT

### Changes

- Add tabs-toolbar component (9480438+LukasKall@users.noreply.github.com)

## 1.0.0-beta.54

Mon, 20 Sep 2021 21:01:58 GMT

### Changes

- change icon fill color with theme (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.53

Thu, 16 Sep 2021 15:30:58 GMT

### Changes

- Add simple tab component (9480438+LukasKall@users.noreply.github.com)

## 1.0.0-beta.52

Wed, 15 Sep 2021 20:07:53 GMT

### Changes

- fix bottom borders of text-field and number-field (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.51

Tue, 14 Sep 2021 21:19:06 GMT

### Changes

- Use VSCode Tasks to start watch scripts (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.51 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.50

Tue, 14 Sep 2021 16:53:39 GMT

### Changes

- uptake DSP font sizes in design-tokens.ts (22551874+scotia673@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.50 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.49

Mon, 13 Sep 2021 15:09:27 GMT

### Changes

- Add karma reporter to list all tests run during CI (jattasNI@users.noreply.github.com)

## 1.0.0-beta.48

Fri, 10 Sep 2021 19:03:37 GMT

### Changes

- Fix broken link in CONTRIBUTING.md (jattasNI@users.noreply.github.com)

## 1.0.0-beta.47

Fri, 10 Sep 2021 18:13:15 GMT

### Changes

- Created nimble-select and nimble-listbox-option (5454342+brianehenry@users.noreply.github.com)

## 1.0.0-beta.46

Thu, 09 Sep 2021 16:11:55 GMT

### Changes

- add readonly text-field support/styling (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.45

Thu, 09 Sep 2021 15:38:58 GMT

### Changes

- use end slot default value for text-field (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.44

Thu, 09 Sep 2021 15:24:52 GMT

### Changes

- improve spacing in text-field storybook matrix (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.43

Wed, 08 Sep 2021 23:12:35 GMT

### Changes

- Update dependencies (jattasNI@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.43 (jattasNI@users.noreply.github.com)

## 1.0.0-beta.42

Tue, 07 Sep 2021 20:53:58 GMT

### Changes

- tweak number and text field styles based on UX updates (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.41

Tue, 07 Sep 2021 20:01:48 GMT

### Changes

- hide password reveal icon in Edge (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.40

Fri, 03 Sep 2021 21:30:56 GMT

### Changes

- fix icon issue in firefox (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.39

Fri, 03 Sep 2021 21:06:53 GMT

### Changes

- Component usage docs strategy (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.38

Fri, 03 Sep 2021 16:05:47 GMT

### Changes

- [object Object] (26874831+atmgrifter00@users.noreply.github.com)

## 1.0.0-beta.37

Thu, 02 Sep 2021 13:46:41 GMT

### Changes

- LegacyBlue button color token (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.36

Wed, 01 Sep 2021 19:35:53 GMT

### Changes

- combining text-field matrices (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.35

Wed, 01 Sep 2021 15:47:53 GMT

### Changes

- added support for invalid state and styling to text-field (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.34

Tue, 31 Aug 2021 14:55:33 GMT

### Changes

- Matrix states support (rajsite@users.noreply.github.com)

## 1.0.0-beta.33

Thu, 26 Aug 2021 19:36:52 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.33 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.32

Thu, 26 Aug 2021 17:52:10 GMT

### Changes

- adding animation delay tokens (1458528+fredvisser@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.32 (1458528+fredvisser@users.noreply.github.com)

## 1.0.0-beta.31

Thu, 26 Aug 2021 15:36:09 GMT

### Changes

- Fix focus state (rajsite@users.noreply.github.com)

## 1.0.0-beta.30

Wed, 25 Aug 2021 13:56:22 GMT

### Changes

- updated styling for text and number fields (22551874+scotia673@users.noreply.github.com)

## 1.0.0-beta.29

Fri, 20 Aug 2021 20:34:16 GMT

### Changes

- apply prettier-fix (fred.visser@ni.com)

## 1.0.0-beta.28

Fri, 20 Aug 2021 13:30:31 GMT

### Changes

- initial legacyBlue theme (fred.visser@ni.com)
- Bump @ni/nimble-components to v1.0.0-beta.28 (fred.visser@ni.com)

## 1.0.0-beta.27

Thu, 19 Aug 2021 21:05:52 GMT

### Changes

- add prettier support (fred.visser@ni.com)

## 1.0.0-beta.26

Wed, 18 Aug 2021 17:48:36 GMT

### Changes

- Update button focus style (christine.karas@ni.com)

## 1.0.0-beta.25

Wed, 18 Aug 2021 16:16:15 GMT

### Changes

- component matrix stories (fred.visser@ni.com)

## 1.0.0-beta.24

Mon, 16 Aug 2021 17:17:45 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.24 (fred.visser@ni.com)

## 1.0.0-beta.23

Thu, 12 Aug 2021 20:46:18 GMT

### Changes

- Switch nimble-theme-provider display mode (rajsite@users.noreply.github.com)
- Bump @ni/nimble-components to v1.0.0-beta.23 (rajsite@users.noreply.github.com)

## 1.0.0-beta.22

Mon, 09 Aug 2021 20:21:46 GMT

### Changes

- add args interface and update checkbox for CSF (fred.visser@ni.com)

## 1.0.0-beta.21

Fri, 06 Aug 2021 18:47:09 GMT

### Changes

- Update to fast-element 1.4.1 (rajsite@users.noreply.github.com)

## 1.0.0-beta.20

Fri, 06 Aug 2021 15:45:51 GMT

### Changes

- Fix checkbox svg on windows (rajsite@users.noreply.github.com)

## 1.0.0-beta.19

Fri, 06 Aug 2021 01:21:32 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.19 (rajsite@users.noreply.github.com)

## 1.0.0-beta.18

Fri, 06 Aug 2021 01:05:01 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.18 (rajsite@users.noreply.github.com)

## 1.0.0-beta.17

Fri, 06 Aug 2021 00:32:42 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.17 (rajsite@users.noreply.github.com)

## 1.0.0-beta.16

Thu, 05 Aug 2021 23:59:22 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.16 (rajsite@users.noreply.github.com)

## 1.0.0-beta.15

Thu, 05 Aug 2021 22:21:19 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.15 (fred.visser@ni.com)

## 1.0.0-beta.14

Thu, 05 Aug 2021 18:43:46 GMT

### Changes

- Add nimble-checkbox component (lukas.kall@ni.com)

## 1.0.0-beta.13

Fri, 30 Jul 2021 18:57:47 GMT

### Changes

- Switch to ES2020 TypeScript code generation (rajsite@users.noreply.github.com)

## 1.0.0-beta.12

Thu, 29 Jul 2021 20:21:54 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.12 (fred.visser@ni.com)

## 1.0.0-beta.11

Thu, 29 Jul 2021 17:51:14 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.11 (rajsite@users.noreply.github.com)

## 1.0.0-beta.10

Wed, 28 Jul 2021 20:38:54 GMT

### Changes

- Fix focus states on Firefox (christine.karas@ni.com)

## 1.0.0-beta.9

Thu, 22 Jul 2021 20:08:12 GMT

### Changes

- Add disabled styles for buttons (christine.karas@ni.com)

## 1.0.0-beta.8

Thu, 22 Jul 2021 00:43:05 GMT

### Changes

- Docs for nimble-number-field (rajsite@users.noreply.github.com)

## 1.0.0-beta.7

Wed, 21 Jul 2021 23:09:43 GMT

### Changes

- Include @storybook/addon-a11y (fred.visser@ni.com)

## 1.0.0-beta.6

Tue, 20 Jul 2021 22:35:42 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.6 (fred.visser@ni.com)

## 1.0.0-beta.5

Tue, 20 Jul 2021 16:48:12 GMT

### Changes

- Add button appearances (christine.karas@ni.com)

## 1.0.0-beta.4

Tue, 20 Jul 2021 15:14:07 GMT

### Changes

- Refactor design token theming and add COLOR theme (christine.karas@ni.com)

## 1.0.0-beta.3

Fri, 16 Jul 2021 22:52:21 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.3 (rajsite@users.noreply.github.com)

## 1.0.0-beta.2

Fri, 16 Jul 2021 16:01:07 GMT

### Changes

- Bump @ni/nimble-components to v1.0.0-beta.2 (fred.visser@ni.com)

## 1.0.0-beta.1

Thu, 15 Jul 2021 21:07:15 GMT

### Changes

- Update outline button styles (christine.karas@ni.com)
