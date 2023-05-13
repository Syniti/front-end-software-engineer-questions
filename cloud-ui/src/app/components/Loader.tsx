"use client"
import { Pane, Spinner } from 'evergreen-ui';

const Loader = () => {
    return (
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={'calc(100vh - 124px)'}
      >
        <Spinner />
      </Pane>
    );
}

export { Loader };