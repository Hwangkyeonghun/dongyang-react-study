import styled from "styled-components";

const MovieList = ({ data }) => {
  return (
    <List>
      {data.map(({ link, title, image }) => (
        <Item key={link}>
          <a href={link} target="_blank" rel="noreferrer">
            {/* __html: title 을 하면 텍스트가 html 코드로 인식이 된다. */}
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Thumbnail src={image} />
          </a>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.li``;

const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default MovieList;
