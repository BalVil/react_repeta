import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { Material } from './Material/Material';
import { MaterialList } from './MaterialList/MaterialList';
import * as API from 'services/api';

export class App extends Component {
  state = { materials: [], isLoading: false, error: false };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        {error && <p>Error. Something went wrong. Please, reload the page</p>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          'LOADING'
        ) : (
          <Material items={materials} onDelete={console.log} />
        )}
      </Layout>
    );
  }
}
