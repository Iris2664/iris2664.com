import cssnano from 'cssnano';

export default {
  plugins: [
    cssnano({
      preset: [
        "default",
        {
          minifyFontValues: {
            removeQuotes: false,
          },
        },
      ],
    }),
  ],
};