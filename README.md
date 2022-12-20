# react-hornet-components

## Overview

#### A simple set of components made in React

#### Installation

```bash
npm i react-hornet-components
```

### Usage

```tsx

import React from 'react';
import './App.css';

import { useForm } from 'react-hook-form';

import { Input, Button, Spinner } from 'react-hornet-components';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={'teste'}
          palette={{
            'primary': 'red',
            'secondary': '#091A7A',
            'tertiary': 'transparent',
          }}
          dimensions={{
            height: '24px',
            width: '441px',
          }}
          placeholder="teste"
          {...register('exampleRequired', { required: true })}
        />

        <Input
          label={'teste'}
          palette={{
            'primary': 'red',
            'secondary': '#091A7A',
            'tertiary': 'transparent',
          }}
          dimensions={{
            height: '24px',
            width: '441px',
          }}
          placeholder="teste"
          {...register('exampleRequired', { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <Button
          palette={{
            'primary': 'white',
            'secondary': '#091A7A',
            'tertiary': '#061B64',
          }}
          size={{
            height: '36px',
            width: '102px',
          }}
          title="save"
          spinnerSize={{
            height: '16px',
            width: '16px',
          }}
          spinnerPalette={{
            'primary': 'transparent',
            'secondary': '#091A7A',
            'tertiary': '#061B64',
          }}
        />

        <div style={{ width: '100px', height: '100px' }}>
          <Spinner
            palette={{
              'primary': 'red',
              'secondary': '#091A7A',
              'tertiary': '#061B64',
            }}
            size={{
              height: '102px',
              width: '102px',
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
```

### Tests
#### To run tests you can use the following command:

```
$ npm run test
```