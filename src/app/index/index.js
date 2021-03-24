import index from './index.san';
import san from 'san';

const Main = san.defineComponent({
  template: `
      <dw-index></dw-index>
  `,
  components: {
    'dw-index': index,
  },
  attached() {},
});

const ins = new Main();
ins.attach(document.getElementById('app'));
