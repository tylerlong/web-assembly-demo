declare let Go: any;

const go = new Go();

let mod: WebAssembly.Module, instance: WebAssembly.Instance;
const button = document.createElement('button');
button.value = 'Run';
button.disabled = true;
document.body.appendChild(button);

WebAssembly.instantiateStreaming(fetch('lib.wasm'), go.importObject).then(
  result => {
    mod = result.module;
    instance = result.instance;
    button.disabled = false;
  }
);

async function run() {
  await go.run(instance);
  instance = await WebAssembly.instantiate(mod, go.importObject); // reset instance
}
button.onclick = run;
