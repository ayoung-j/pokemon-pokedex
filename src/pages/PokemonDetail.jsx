import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../constants/mock";
import { ButtonStyle } from "../components/Button";
import { useSearchParams } from "react-router-dom";

const PokemonDetailStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
`;
const CardImage = styled.img`
    width: 200px;
`;
const CardTitle = styled.div`
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: var(--spacing);
`;
const CardText = styled.div`
    font-size: 1.6rem;
    text-align: center;
    color: var(--gray-color);
`;
const ButtonWrap = styled.div`
    width: 100%;
    margin-top: 40px;
`;
const PokemonDetailButton = styled(ButtonStyle)`
    width: auto;
    height: 40px;
    margin: auto;
`;

const EmptyText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg);
    color: #fff;
    background-color: var(--gray-color);
    border-radius: var(--border-radius-sm);
`;

const PokemonDetail = () => {
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();
    const pokemonId = searchParams.get("id");
    const pokemon = MOCK_DATA.find((item) => item.id === Number(pokemonId));

    return (
        <PokemonDetailStyle>
            {!pokemon ? (
                <EmptyText>포켓몬을 찾을 수 없습니다.</EmptyText>
            ) : (
                <Card>
                    <CardImage src={pokemon.img_url} alt={pokemon.korean_name} />
                    <CardTitle>{pokemon.korean_name}</CardTitle>
                    <CardText>
                        타입: {pokemon.types.join(", ")}
                        <br />
                        {pokemon.description}
                    </CardText>
                    <ButtonWrap>
                        <PokemonDetailButton
                            bgColor="var(--gray-color)"
                            onClick={() => {
                                navigate(-1);
                            }}>
                            뒤로가기
                        </PokemonDetailButton>
                    </ButtonWrap>
                </Card>
            )}
        </PokemonDetailStyle>
    );
};

export default PokemonDetail;
