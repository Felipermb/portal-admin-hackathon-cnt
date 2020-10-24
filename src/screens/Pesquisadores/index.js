import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '~/components/header/Header';

class Pesquisadores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { history } = this.props;

    return (
      <>
        <Header
          title="Lista de Pesquisadores Cadastrados"
          subTitle="Aqui você pode visualizar os pesquisadores cadastrados, criar e alterar pesquisadores"
          buttonName="Novo Pesquisador"
          onClickButton={() => {
            history.push(`/portal/pesquisadores/criar`);
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pesquisadores);
