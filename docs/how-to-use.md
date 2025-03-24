---
id: how-to-use
title: How to Use
---

# **How to Use**

### **1. User Registration and Contract Addition**

- Developers create an account in **Ryvit**.
- They add their contracts to the dashboard.
- **Ryvit** automatically retrieves all accessible data keys.
- If some data keys cannot be fetched automatically, the user can manually add them by specifying:
  - The exact key name.
  - The value type (if required).

### **2. TTL Configuration Options**

Each contract and its associated data keys can be managed with three TTL extension settings:

1. **Email Notification**: The user receives an email alert when TTL reaches a specified threshold.
2. **Automatic Extension**: **Ryvit** automatically extends TTL when it reaches a critical level.
3. **Custom Extension Plan**: The user selects a predefined extension period (e.g., 1 month, 3 months, or 5 months).

### **3. Data Key Management & TTL Extension Operations**

Once a contract is added, the dashboard provides a complete overview of all **data keys, their TTL status, and related information**. Users can select one or multiple data keys and apply **one of the following three operations**:

#### **A. List-Based Extension**

- The user provides a **list of values** based on the **data key’s type**.
- **Ryvit** extends TTL for all data keys using this list.
- Example:
  - If the data key is `Lockup(u64)`, and the user provides `[1, 2, 3]`, **Ryvit** extends TTL for `Lockup(1)`, `Lockup(2)`, and `Lockup(3)`.

#### **B. Range-Based Extension**

- The user defines a **numerical range** (e.g., `0 to 10`).
- If the data key’s value type supports numbers, **Ryvit** iterates through the range and extends TTL for each instance.

#### **C. Function-Based Extension**

- If the contract contains a **public function** that provides relevant TTL information, the user can configure it.
- The user specifies:
  - The function name.
  - Its output type.
  - Input parameters (if required).
- Example:
  - The function `lastId()` returns the last used ID.
  - **Ryvit** periodically calls this function (e.g., every 24 hours) and extends TTL accordingly.

🔹 **Only one of these three methods can be assigned to each data key.**
