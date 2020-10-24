import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '~/components/header/Header';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header title="Dashboards" subTitle="Todos Dashboards da aplicação" />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
