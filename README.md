# web-assembly-demo

## Run go program

```
go run main.go
```

## Compile to WASM

```
GOARCH=wasm GOOS=js go build -o docs/lib.wasm main.go
```


## Build website

```
yarn release
```
