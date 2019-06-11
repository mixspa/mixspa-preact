import { render } from 'preact';
import Mixspa from '@mixspa/core';

const createApp = (tag, renderCom) => {
  Mixspa.define({
    tag: tag,
    render: (parentEl) => {
      render(renderCom(Mixspa.getAttributes(parentEl)), parentEl);
    }
  });
};

export default createApp;
