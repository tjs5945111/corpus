
import React, { useState } from 'react';
import { connect } from 'dva';
import { Card, Input, Button, Divider } from 'antd';

const { TextArea } = Input;

const ServiceCompontent = (props) => {

  const [value, setValue] = useState('');
  function handleSearch() {
    value && props.dispatch({
      type: 'all/mainSearch',
      payload: { value }
    })
  }

  return (
    <Card>
      <h3 style={{ fontWeight: 'bolder' }}>高级检索</h3>
      <div style={{ padding: '30px', background: '#E7E6E6' }}>
        <p>检索表达式：</p>
        <TextArea rows={6} style={{ width: '60%' }} value={value} onChange={e => setValue(e?.target?.value)} />
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <Button type="primary" style={{ width: '200px', marginRight: '250Px' }} onClick={() => handleSearch()}>检索</Button>
        </div>
        <Divider style={{ background: '#BBBB' }} />
        <p>使用方法：</p>
        <p>高级检索支持使用运算符 *、+、-、"、""、()进行同—检索项内多个检索词的组合运算，检索词内输入的内客不得超过120个字符。</p>
        <p>输入运算符*(与)、+(或)、-(非)时，前后要空—个字节，优先级需用英文半角括号确定。</p>
        <p>若检索词本身含空格或 *、+、-、()、/、%、=等特殊符号，进行多词组合运算时，为避免歧义，须将检索词用英文半角单引号或英文半角双引号引起来。</p>
      </div>
    </Card>
  );

};

ServiceCompontent.propTypes = {
};

export default connect()(ServiceCompontent);
