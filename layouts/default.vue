<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
$m-size-1: 4px;
$m-size-2: 8px;
$m-size-3: 12px;
$m-size-4: 16px;
$m-size-5: 20px;
$m-size-6: 24px;
$m-size-7: 28px;
$m-size-8: 32px;
$m-size-9: 36px;

$m-spaces: (
  100: $m-size-2,
  200: $m-size-3,
  300: $m-size-4,
  400: $m-size-6,
  500: $m-size-9,
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
    margin-right: $value;
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
    padding-right: $value;
  }
  .pt-#{$key} {
    padding-top: $value;
  }
  .pb-#{$key} {
    padding-bottom: $value;
  }
}

$m-font-sizes: (
  100: $m-size-3,
  200: $m-size-4,
  300: $m-size-5,
  400: $m-size-6,
  500: $m-size-7
);

@each $key, $value in $m-font-sizes {
  .fs-#{$key} {
    font-size: $value;
  }
}

.fw-bold {
  font-weight: bold;
}

html {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
  font-size: $m-size-5;
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
</style>
