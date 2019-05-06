const isDoc = process.env.NODE_ENV === 'document';
const isPro = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: './',
  outputDir: (() => {
    if (isDoc) {
      return 'docs';
    }
    else if (isPro) {
      return 'dist';
    }
    else {
      return 'other';
    }
  })(),
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      });
  }
};