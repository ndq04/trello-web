import Button from '@mui/material/Button';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import {useColorScheme} from '@mui/material/styles';

function ModeToggle() {
  const {mode, setMode} = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <p>QuangND</p>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <AccessAlarm />
      <ThreeDRotation />
      <ModeToggle />
    </>
  );
}

export default App;
