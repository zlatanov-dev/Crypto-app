import { Avatar, Col, Collapse, Row, Typography } from 'antd';
import { useGetExchangesQuery } from '../services/cryptoExchangeApi';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';

import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

function Exchanges() {
  const { data: exchangesList, isLoading } = useGetExchangesQuery();

  if (isLoading) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h BTC Volume</Col>
        <Col span={6}>Year Established</Col>
        <Col span={6}>Country</Col>
      </Row>
      {exchangesList.map((exchange) => (
        <Row key={exchange.uuid}>
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={
                  <Row>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>
                      </Text>
                      <Avatar className="exchange-image" src={exchange.image} />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.trade_volume_24h_btc)}</Col>
                    <Col span={6}>{exchange.year_established || 'No information.'}</Col>
                    <Col span={6}>{exchange.country || 'No information.'}</Col>
                  </Row>
                }
              >
                {exchange.description ? (
                  HTMLReactParser(exchange.description)
                ) : (
                  <Text>
                    No description available. For more information, visit{' '}
                    <a href={exchange.url} target="_blank" rel="noreferrer">
                      {exchange.name}
                    </a>
                  </Text>
                )}
              </Panel>
            </Collapse>
          </Col>
        </Row>
      ))}
    </>
  );
}

export default Exchanges;
