export const handler = async () => {
    const fs = await import('fs/promises');
    const html = await fs.readFile('./index.html', 'utf8');
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: html,
    };
};