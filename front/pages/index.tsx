import { Accordion } from "@mantine/core";
import Brand from "../src/view/components/brand/Brand";
import CreateGameForm from "../src/view/components/createGameForm/CreateGameForm";
import GameCard from "../src/view/components/gameCard/GameCard";
import styles from "../styles/Home.module.css";
export default function index() {
  return (
    <div className={styles.root}>
      <Brand description={true} />
      <div className={styles.container}>
        <Accordion iconPosition="right">
          <Accordion.Item label="Create Game">
              <CreateGameForm/>
          </Accordion.Item>
          <Accordion.Item label="Join Game">
            <GameCard name="game1"/>
            <GameCard name="game2"/>
            <GameCard name="game3"/>
            <GameCard name="game4"/>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
