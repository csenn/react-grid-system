A no CSS Bootstrap-like responsive grid system for React.

For more information on these components, view this project on GitHub: [https://github.com/JSxMachina/react-grid-system](https://github.com/JSxMachina/react-grid-system)

Resize your browser or load on different devices to test the grid system.

### Example: Fluid containers conditionals
```
<div style={{ width: '1000px', height: '200px' }}>
  <Container fluid md style={{ backgroundColor: '#34495e' }}>
    <Row style={{ backgroundColor: '#2c3e50' }}>
      <Col md={8} style={{ color: 'white', height: '100px' }}>md=8</Col>
      <Col md={4} style={{ color: 'white', height: '100px' }}>md=4</Col>
    </Row>
  </Container>
  <Container style={{ backgroundColor: '#34495e' }}>
    <Row style={{ backgroundColor: '#2c3e50' }}>
      <Col md={8} style={{ backgroundColor: '#e67e22', height: '100px' }}>md=8</Col>
      <Col md={4} style={{ backgroundColor: '#e74c3c', height: '100px' }}>md=4</Col>
    </Row>
  </Container>
</div>
```

### Example: Stacked-to-horizontal

```
<Row>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
</Row>
```

```
<Row>
  <Col md={8} style={{ border: '1px solid silver' }}>md=8</Col>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
</Row>
```

```
<Row>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
</Row>
```

```
<Row>
  <Col md={6} style={{ border: '1px solid silver' }}>md=6</Col>
  <Col md={6} style={{ border: '1px solid silver' }}>md=6</Col>
</Row>
```

### Example: Mobile and desktop

```
<Row>
  <Col xs={12} md={8} style={{ border: '1px solid silver' }}>xs=12 md=8</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
</Row>
```

```
<Row>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
</Row>
```

```
<Row>
  <Col xs={6} style={{ border: '1px solid silver' }}>xs=6</Col>
  <Col xs={6} style={{ border: '1px solid silver' }}>xs=6</Col>
</Row>
```

### Example: Mobile, tablet, desktop

```
<Row>
  <Col xs={12} sm={6} md={8} style={{ border: '1px solid silver' }}>xs=12 sm=6 md=8</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
</Row>
```

```
<Row>
  <Col xs={6} sm={4} style={{ border: '1px solid silver' }}>xs=6 sm=4</Col>
  <Col xs={6} sm={4} style={{ border: '1px solid silver' }}>xs=6 sm=4</Col>
  <Col xs={6} sm={4} style={{ border: '1px solid silver' }}>xs=6 sm=4</Col>
</Row>
```

### Example: Column wrapping

```
<Row>
  <Col xs={9} style={{ border: '1px solid silver' }}>xs=9</Col>
  <Col xs={4} style={{ border: '1px solid silver' }}>xs=4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide Col gets wrapped onto a new line as one contiguous unit.</Col>
  <Col xs={6} style={{ border: '1px solid silver' }}>xs=6<br/>Subsequent columns continue along the new line.</Col>
</Row>
```

### Example: Responsive column resets

```
<Row>
  <Col xs={6} sm={3} style={{ border: '1px solid silver' }}>
    xs=6 sm=3<br />
    Resize your viewport or check it out on your phone for an example.
  </Col>
  <Col xs={6} sm={3} style={{ border: '1px solid silver' }}>xs=6 sm=3</Col>

  <ClearFix xs />

  <Col xs={6} sm={3} style={{ border: '1px solid silver' }}>xs=6 sm=3</Col>
  <Col xs={6} sm={3} style={{ border: '1px solid silver' }}>xs=6 sm=3</Col>
</Row>
```

### Example: Offsetting columns

```
<Row>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
  <Col md={4} offset={{ md: 4 }} style={{ border: '1px solid silver' }}>md=4 offset-md=4</Col>
</Row>
```

```
<Row>
  <Col md={3} offset={{ md: 3 }} style={{ border: '1px solid silver' }}>md=3 offset-md=3</Col>
  <Col md={3} offset={{ md: 3 }} style={{ border: '1px solid silver' }}>md=3 offset-md=3</Col>
</Row>
```

```
<Row>
  <Col md={6} offset={{ md: 3 }} style={{ border: '1px solid silver' }}>md=6 offset-md=3</Col>
</Row>
```

### Example: Nesting columns

```
<Row>
  <Col sm={9} style={{ border: '1px solid silver' }}>
    Level 1: sm=9
    <Row>
      <Col xs={8} sm={6} style={{ border: '1px solid gray' }}>
        Level 2: xs=8 sm=6
      </Col>
      <Col xs={4} sm={6} style={{ border: '1px solid gray' }}>
        Level 2: xs=4 sm=6
      </Col>
    </Row>
  </Col>
</Row>
```
