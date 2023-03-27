import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // < 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={"5px"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingLeft={"6px"}>
          <GameHeading gameQuery={gameQuery}></GameHeading>

          <Flex marginBottom={1}>
            <Box marginRight={3}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) => {
                  setGameQuery({ ...gameQuery, platform });
                }}
              ></PlatformSelector>
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            ></SortSelector>
          </Flex>
        </Box>

        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
