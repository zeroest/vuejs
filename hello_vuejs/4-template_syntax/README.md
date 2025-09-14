
# Template syntax

## 데이터 바인딩

뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법

기본적인 데이터 바인딩 방식은 Mustache Tag

```html
<div>{{ message }}</div>

<script>
    new Vue({
        data: {
            message: "Hello"
        }
    })
</script>
```

## 디렉티브

뷰로 화면의 요소를 더 쉽게 조작하기 위한 문법

화면 조작에서 자주 사용되는 방식들을 모아 디렉티브 형태로 제공

```html

<div>
    Hello <span v-if="show">Vue.js</span>
</div>

<script>
    new Vue({
        data: {
            show: true
        }
    })
</script>
```



