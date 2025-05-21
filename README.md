# Simple React Application Deployment Comparison

This project demonstrates the deployment of simple frontend applications under different configurations — with and without bundling to differant cloud platforms

---

## 🌐 Live Demos

### 1. React App with Bundling (Vite + Rollup) - Deployed to Netlify
- **URL:** [https://silver-kitten-486458.netlify.app/](https://silver-kitten-486458.netlify.app/)
- **Bundler:** Vite (Rollup)
- **Deployment Platform:** Netlify

---

### 2. React App without Bundling - Deployed to Netlify
- **URL:** [https://jovial-flan-75d038.netlify.app/](https://jovial-flan-75d038.netlify.app/)
- **Bundler:** None (Raw React)
- **Deployment Platform:** Netlify

---

### 3. React App without Bundling - Deployed to AWS Lambda
- **URL:** [https://wwp6s551k5.execute-api.us-east-1.amazonaws.com/default/withoutBundling](https://wwp6s551k5.execute-api.us-east-1.amazonaws.com/default/withoutBundling)
- **Bundler:** None
- **Deployment Platform:** AWS Lambda (via API Gateway)
- **Node Version:** 22  
- **Architecture:** x86_64  
- **Setup:** Manual (Lambda function and API Gateway configured manually)

---

### 4. React App with Bundling (Vite + Rollup) - Deployed to AWS Lambda
- **URL:** [https://3pw2bxqiz3.execute-api.us-east-1.amazonaws.com/default/withBundling](https://3pw2bxqiz3.execute-api.us-east-1.amazonaws.com/default/withBundling)
- **Bundler:** Vite (Rollup)
- **Deployment Platform:** AWS Lambda (via API Gateway)
- **Node Version:** 22  
- **Architecture:** x86_64  
- **Setup:** Manual (Lambda function and API Gateway configured manually)

---

## 🛠️ Notes

- All AWS Lambda functions were manually configured without serverless frameworks.
- These examples aim to support evaluation of bundling's impact on serverless deployments, particularly for cold start behavior.

