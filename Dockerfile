# Step 1: Use an official Node.js runtime as a parent image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the app source code to the working directory
COPY . .

# Step 6: Expose the app port to the outside world
EXPOSE 3000

# Step 7: Define the command to run the app
CMD ["npm", "start"]
