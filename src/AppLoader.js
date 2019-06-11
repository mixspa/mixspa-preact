import { h, Component } from 'preact';
import Mixspa from '@mixspa/core';

class AppLoader extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const { appId, onError } = this.props;
    Mixspa.load(appId).then(appInfo => {
      this.setState({
        isLoading: false,
        appInfo: appInfo
      });
    }).catch(error => onError(error, appId));
  }

  render(props, state) {
    const { appId, className, children, ...rest } = props;
    const { isLoading, appInfo } = state;
    return (
      <div className = { className || appId.toLowerCase() }>
        { isLoading ? children : <appInfo.tag {...rest}/> }
      </div>
    );
  }
}

export default AppLoader;
