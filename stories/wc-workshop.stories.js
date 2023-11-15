import { html } from 'lit';
import '../src/wc-workshop.js';

export default {
  title: 'WcWorkshop',
  component: 'wc-workshop',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <wc-workshop
      style="--wc-workshop-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </wc-workshop>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
