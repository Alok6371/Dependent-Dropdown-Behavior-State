# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Dependent Dropdown Behavior------
State Dropdown

This dropdown should be enabled by default.

User must select a State first.

Until a state is selected, District, Block, and Pincode dropdowns must remain disabled.

District Dropdown

Once a State is selected, enable the District dropdown.

Populate the district list only for the selected state.

If the user changes the state again:

Reset the selected district, block, and pincode

Disable Block and Pincode dropdowns again

Block Dropdown

Enable the Block dropdown only after a District is selected.

Show blocks related only to the selected district.

If the district changes:

Reset block and pincode

Disable Pincode dropdown

Pincode Dropdown

Enable the Pincode dropdown only after a Block is selected.

Show pincodes related only to the selected block.

🔄 Reset Rules (Very Important)
Changing State → reset District, Block, Pincode

Changing District → reset Block, Pincode

Changing Block → reset Pincode
