module.exports = {
    semi: true, // 코드 끝에 세미콜론을 항상 추가해요. (기본적으로 JavaScript의 암시적 세미콜론 자동 삽입을 피하고 명확성을 높입니다)
    singleQuote: true, // 문자열을 작은 따옴표로 감싸도록 해요. (JS의 일관성을 위해 큰 따옴표 대신 작은 따옴표 권장)
    trailingComma: 'all', // 여러 줄로 나뉜 객체나 배열에서 마지막 원소에도 쉼표를 추가해요. (Git diff가 더 깔끔해지고, 요소 추가 시 코드가 더 깔끔해짐)
    printWidth: 80, // 한 줄의 길이를 80자로 제한해 가독성을 높여요. (일반적으로 코드를 한 화면에 맞추기 위함)
    tabWidth: 2, // 들여쓰기할 때 사용할 공백의 개수를 2로 설정해요. (스페이스 2칸은 가독성과 공간 절약 사이에서 가장 많이 사용하는 설정)
    arrowParens: 'always', // 화살표 함수에서 매개변수가 하나여도 항상 괄호를 추가해요. (`x => x + 1` 대신 `(x) => x + 1`으로 가독성 증가)
    bracketSpacing: true, // 객체 리터럴의 중괄호 내부에 공백을 추가해요. (`{a: 1}` 대신 `{ a: 1 }`으로 가독성을 높임)
    jsxSingleQuote: false, // JSX에서 큰 따옴표를 사용해요. (HTML 속성과의 일관성을 위해 JSX에서는 큰 따옴표가 더 일반적)
    proseWrap: 'preserve', // 마크다운에서 줄바꿈을 원본 그대로 유지해요. (문서의 원본 형식을 유지)
  };