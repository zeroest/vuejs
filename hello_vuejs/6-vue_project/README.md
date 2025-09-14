
# Vue js

## Webpack

웹팩이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)

모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미



https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html

## Vue Loader

로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성

https://vue-loader.vuejs.org/

https://joshua1988.github.io/webpack-guide/concepts/loader.html

## Single File Component

싱글 파일 컴포넌트는 화면의 특정 영역에 대한 HTML, CSS, JS 코드를 한 파일에서 관리하는 방법

vue 확장자를 가진 파일을 모두 싱글 파일 컴포넌트

https://joshua1988.github.io/vue-camp/vue/sfc.html

```vue
<!-- .vue 파일 구조 -->
<template>
  <!-- html (뷰 컴포넌트의 표현단, 템플릿 문법) -->
</template>

<script>
  // 자바스크립트 (뷰 컴포넌트 내용)
</script>

<style>
  /* CSS (뷰 템플릿의 스타일링) */
</style>
```

### 싱글 파일 컴포넌트의 동작 원리

https://vue-loader.vuejs.org/guide/

싱글 파일 컴포넌트는 뷰 로더에 의해 HTML, CSS, JS와 같은 웹 자원으로 분리되어 실행

뷰 로더 (opens new window)는 웹팩의 로더 종류 중 하나이고 뷰 CLI로 프로젝트를 생성하면 기본적으로 설정이 되어 있음

## Snippets

vbc = vbase-css

- 기본적인 vue single file template 구조를 만들어 줌

vda = vdata

- data() 구조를 만들어줌

vme = vmethod

- methods 구조를 만들어줌
