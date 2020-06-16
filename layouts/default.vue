<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
  font-size: 18px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

$m-spaces: (
  100: 6px,
  200: 12px,
  300: 18px,
  400: 24px,
  500: 30px,
  a: auto
);

@each $key, $value in $m-spaces {
  .mx-#{$key} {
    margin-left: $value;
    margin-right: $value;
  }
  .my-#{$key} {
    margin-top: $value;
    margin-bottom: $value;
  }
  .ml-#{$key} {
    margin-left: $value;
  }
  .mr-#{$key} {
    margin-left: $value;
  }
  .mt-#{$key} {
    margin-top: $value;
  }
  .mb-#{$key} {
    margin-bottom: $value;
  }

  .px-#{$key} {
    padding-left: $value;
    padding-right: $value;
  }
  .py-#{$key} {
    padding-top: $value;
    padding-bottom: $value;
  }
  .pl-#{$key} {
    padding-left: $value;
  }
  .pr-#{$key} {
    padding-left: $value;
  }
  .pt-#{$key} {
    padding-top: $value;
  }
  .pb-#{$key} {
    padding-bottom: $value;
  }
}

$m-sizes: (
  100: 12px,
  200: 15px,
  300: 18px,
  400: 24px,
  500: 36px
);

@each $key, $value in $m-sizes {
  .fs-#{$key} {
    font-size: $value;
  }
}

.fw-bold {
  font-weight: bold;
}
</style>
