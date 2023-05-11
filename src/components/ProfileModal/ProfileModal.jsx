import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();
  return (
    <>
      <Modal
        title="Authentication"
        overlayProps={{
            color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
            opacity: 0.55,
            blur: 3,
        }}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className='infoForm'>
            <h3>Your info</h3>
            <div>
                <input type="text" className='infoInput' name="firstName" placeholder='First Name' />
                <input type="text" className='infoInput' name="lastName" placeholder='Last Name' />
            </div>

            <div>
                <input type="text" className='infoInput' name="worksAT" placeholder='Works at' />
            </div>

            <div>
                <input type="text" className='infoInput' name="livesIN" placeholder='Lives in' />
                <input type="text" className='infoInput' name="Country" placeholder='Country' />
            </div>

            <div>
                <input type="text" className='infoInput' placeholder='RelationShip Status' />
            </div>

            <div>
                Profile Image
                <input type="file" name="profileImg" />
                Couver image<input type="file" name="coverImg" />
            </div>

            <button className='button infoButton'>Update</button>
        </form>
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}

export default ProfileModal;