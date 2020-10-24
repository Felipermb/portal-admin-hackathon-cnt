import React, { Fragment, Component } from 'react';
import cx from 'classnames';

import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderLogo from '../AppLogo';
import UserBox from './Components/UserBox';

class Header extends Component {
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          className={cx('app-header', headerBackgroundColor, {
            'header-shadow': enableHeaderShadow,
          })}
          transitionName="HeaderAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <HeaderLogo />

          <div
            className={cx('app-header__content', {
              'header-mobile-open': enableMobileMenuSmall,
            })}
          >
            <div className="app-header-left" />
            <div className="app-header-right">
              <UserBox />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.themeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.themeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.themeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.themeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);