import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Column from './Column';

export default function ColumnComponent(props) {
  const {
    contents, columns, srcs, overlaySrcs, names, surnames,
  } = props;
  return (
    <Grid>
      <Row style={{ maxWidth: '960px', margin: 'auto', marginTop: '70px' }} xs={12}>
        {contents.map((c, idx) => (
          <Col
            style={{
              padding: '0', marginBottom: '10px', display: 'flex', alignItems: 'center',
            }}
            xs={12}
            md={12}
            lg={12 / columns}
            key={names ? names[idx] : idx}
          >
            <Column
              height={960 / columns - 10}
              width={960 / columns - 10}
              src={srcs ? srcs[idx] : ''}
              overlaySrc={overlaySrcs ? overlaySrcs[idx] : ''}
              name={names ? names[idx] : ''}
              surname={surnames ? surnames[idx] : ''}
              content={c}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  );
}
