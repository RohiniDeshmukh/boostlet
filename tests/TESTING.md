# ⚠️ Boostlet Testing Guide ⚠️

**INSERT ACTIONS BADGE HERE**

This guide provides instructions on how to test your Boostlet distributions both locally and via GitHub Actions. It is crucial for all contributors to test their changes before creating a pull request (PR) or pushing to the main branch.

## 🚂 Local Testing 

1. **Build Your Boostlet Distribution**
   First, build your Boostlet distribution with your changes:
   ```bash
   npx parcel build
   ```

2. **Start the Local Server**
Run the following command to start a local server at port 5501:
    ```bash
    npm run dev
    ```

3. **Run Tests**
Execute the following command to start the testing process:
    ```bash
    npm run test
    ```

    This command initiates the testing using Puppeteer. It compares the pixels of the test images to the ground truth and logs the results to the console. <br>

- The testing process involves checking your distribution across various frameworks.
- If no issues are reported in the command line, it indicates that your distribution has passed the tests.<br><br>

4. **Check Test Screenshots**
All screenshots taken during the testing phase are saved in `/tests/scripts/images/` directory. The filenames start with "Test" followed by the DateString indicating when the test was run.

5. **Creating a PR**
If the local tests pass without issues, it's safe to create a PR or merge your changes to the main branch.

## 🚀 Testing with GitHub Actions

### Overview

When a PR is created, a similar testing process is automatically triggered in GitHub Actions. This automated testing ensures consistency and reliability of the code being merged.

### Monitoring Test Progress

- You can monitor the progress of the testing under the "Actions" tab on GitHub.<br><br>
![Captura de pantalla 2024-01-13 201621](https://github.com/gaiborjosue/boostlet/assets/78832141/bf3d64cc-aca6-4c29-a532-ea7cef00ae69)

- Typically, the test takes about 5 to 8 minutes to complete.

### Viewing Test Results

- To view the results of the testing, check the "Summary" tab on the GitHub Actions workflow run.<br><br>
![Captura de pantalla 2024-01-13 201346](https://github.com/gaiborjosue/boostlet/assets/78832141/165d5531-8ea3-4efb-93bd-4b3f366bdd12)


- The summary includes a table with the test results for each framework. i.e <br><br>
  ![image](https://github.com/gaiborjosue/boostlet/assets/78832141/99796b34-697e-463a-906f-a8c519feb53c)


### Accessing Test Screenshots

- To access the screenshots from the testing, click on the "Screenshots-From-Testing" artifact link above the summary section. This will download a zip file containing all the test screenshots.<br><br>
![Captura de pantalla 2024-01-13 201806](https://github.com/gaiborjosue/boostlet/assets/78832141/dd70c517-ff4f-4bb1-a09d-c701bd5ebff8)

- Alternatively, Boostlet developers can view the screenshots on the Cloudinary media management dashboard.

### Automated PR Comments

- A bot will comment on the PR, indicating whether the tests passed or failed.
- If the tests pass, the PR can be submitted for review.
- If the tests fail, any subsequent change to the PR will trigger the testing process again.

Remember, thorough testing is crucial for maintaining the quality and functionality of Boostlet. Please ensure to follow these steps for a smooth contribution process.

