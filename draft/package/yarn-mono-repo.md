# yarn mono-repo

yarn을 활용해서 모노레포를 구축하는 방법입니다. 처음 경험해보는 것이 중요합니다. 다시하기 생각보다 쉽습니다. 그리고 이론보단 직접 먼저하고 이론을 이해하는 것이 더 잘 이해됩니다.

```sh
yarn -v
```

```sh
node -v
```

nvm으로 노드 버전을 관리하기 위해 설치합니다.

`.nvmrc`파일을 루트 리덱토리에 생성합니다.

```sh
// yarn 버전 확인
yarn -v

// yarn 버전 변경
yarn set version berry
yarn set version stable

// yarn 버전 확인
yarn -v
```

```sh
yarn init -w
```
