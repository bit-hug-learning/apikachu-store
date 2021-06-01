import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '320px',
          height: '700px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '700px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1200px',
          height: '700px',
        },
      },
    },
  },
};
