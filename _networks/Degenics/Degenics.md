---
draft: true
title: Degenics.com
subtitle: An anonymous, decentralized marketplace for personal genetic testing -- built on the Polkadot blockchain.
start-date: 2020
hosts:
  - DIYbiosphere
partners:
  - '[Blocksphere](http://blocksphere.id)'
  - '[Kilt.io](http://kilt.io)'
  - Blockzero
type-org: Network
address: Equity Tower, Sudirman No.22, RT.5/RW.3, Senayan, Central Business District  
postcode: 12190
city: South Jakarta City
state: Jakarta
country: Indonesia
_geoloc:
  lat: -6.225147
  lng: 106.808382
tags:
  - blockchain
  -  bioinformatics
  -  genetic testing
  -  biomedical testing
  -  anonymous
  -  privacy
website: http://degenics.com
blog: http://medium.com/Degenics
email: p@degenics.com
facebook: https://www.facebook.com/blocksphere.id/
twitter: https://twitter.com/DeBio_Network
links:
- URL: http://degenics.com
  tooltip: homepage
promotions:
  - button: Try the Degenics demo!
    text: Try out the demonstration of Degenics.com, our anonymous genetic testing marketplace!
    URL: http://demo.degenics.com
    image: https://drive.google.com/open?id=1ARuJXc7ZC_PYeel1dc28IhL3ZrWuclSM
---
# Decentralized Genetics
### Latest changes to main project always concurred by [CHANGELOG.md](https://github.com/Degenics/degenics-public/blob/main/CHANGELOG.md) via weekly sprint.
### This file provides the concept document for the Degenics project. If you found this file somewhere else, organizational repo for the project is at [Degenics](http://github.com/Degenics) and the public-facing website is at [decentralizedgenetics.com](http://decentralizedgenetics.com). Caveat: *The Following Concept Description is licensed via [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/), to Pandu Sastrowardoyo / [Decentricity](http://github.com/Decentricity)*
### Elevator Pitch
#### Degenics: The Decentralized Genetics Initiative We are building a decentralized platform for your personal genetics. Our concept allows synergy between labs of all scales while guaranteeing user anonymity and sovereignty at every step of the genomic data science workflow— from sample collection, data storage, to report generation.
### Vision
We aim to democratize direct-to-consumer genomics and biomedical testing with a privacy-preserving, anonymous-first marketplace platform running on a fully decentralized, autonomous infrastructure.
### MVP Vision
Degenics 1.0 (private deployment March 2021) provides anonymous, decentralised sample collection, payment, data storage, and report distribution. TL;DR: a VPN for your DNA. The demo is at [demo.degenics.com](http://demo.degenics.com)
### Who we are
Degenics is a group of IT consultants, blockchain developers, and biologists who are passionate about privacy, decentralized technologies, and genomic data science.
* [Pandu Sastrowardoyo](http://github.com/Decentricity) - Initiator
* [Gilang Bhagaskara](http://github.com/gilangbh) - Tech Lead
* Jean-Daniel Gauthier - Product Lead
* Aaron Ting - Marketing Lead
* [Bobby Andika](http://github.com/ybobby) - Dev Lead
* [Muhammad Arif](http://github.com/marcondol) - Back End and Blockchain
* [Aloysius Dedy](http://github.com/aloisius82) - Blockchain and Smart Contracts
* [Kevin Janada](http://github.com/kevinjanada) - UI/UX
* Ibnu Gamal Alhadid - Advisor
## Trustless/Fully Decentralized Model
### Anonymous Physical-Digital Bridge
Without having to enter KYC, the user activates the dApp and generates her passphrase. This forms the basis of her private key, and is paired with a sharable public key. The user takes two samples -- a cheek swab to be practical-- and puts them into a sample bottle each. Each sample bottle is put into its own envelope. dApp creates an envelope label that the user can either rewrite or print on the sample envelopes. This envelope label contains her public key, no personally identifiable information and no return address, but does contain 2 lab addresses to send samples to. User sends the two envelopes via her local post office box.
### Decentralized Labs, Sovereign Data
The aforementioned labs analyze the sample and produce datasets (VCF file & analysis). The platform compares datasets from the two labs and checks the difference between select points in the data. If there is more than 10% difference, the user is given the option to send in another sample. Sampling instructions are provided again. If there is less than 10% difference between two output datasets. both are encrypted with the user's public key and put inside the platform (Blockchain + Decentralized Storage). User is alerted, and can access her data at any time by decrypting via private key.
## Enterprise/Consortium Model
### Semi-Decentralized Deployment with "Lab Marketplace"
An alternative deployment model would be the private / consortium deployment where labs are directly selected by the users. This simplifies the workflow while maintaining the anonymity of the users. The labs get access to a commercial market, and the users still get an anonymous physical-to-digital bridge for their genomic data. Additionally, after the initial on-ramp, the labs are free to up-sell additional analytics products to the users, without resampling.
## Tech-Related FAQ
### If things are happening anonymously, how does the user/customer pay for the service?
There are two options, the traditional option or the fully decentralized option. We prefer fully decentralized, but this might not be an option in all locales. Traditional payment models may also work better for consortium or private deployments of Degenics.
#### Enterprise/Consortium Model
The traditional option: Consumer funds are held in escrow by a local payment gateway or bank until the lab provides valid data (report and genome) into decentralized storage. The smart contract then triggers fund disbursement into the lab's accounts. Note that this still maintains anonymity of the genomic data, since: - Payment gateway / bank does have access to consumer KYC, but does not have access to genomic data or reports - Labs don't have access to consumer KYC, although it does have access to anonymized genomic data.
#### Trustless/Decentralized Payments
All transactions happen via a Blockchain token model. Consumer onboards with their preferred cryptocurrency token, or goes through a fiat-to-crypto bridge (example here) to pay. Smart contracts hold consumer's tokens in escrow until labs provide valid data. The smart contract then triggers fund disbursement into the labs' account
### Why 2 labs? Is it for the sake of comparing the result?
We designed Degenics with 2 labs per transaction since we want to solve this following global problem with personal genetic testing: Unlike other categories of services, consumers can't recheck the results of DNA analytics services unless they have access to a lab or PCR device of their own. This, we feel, places consumers at a disadvantage and may lower the quality of future genetic testing results within the ecosystem. Thus, we designed the platform with a semi-random, rating-based selection of two labs per transaction to ensure two things:
- All labs, from garage DIYBiolabs to large companies, can join the ecosystem and compete with each other.
- The quality of the results are maintained, even with the consumers being anonymous. The two labs model is optional (users can elect to just choose one lab to send to), but Degenics believes that the future of a truly decentralized genetic testing ecosystem lies here. In the long term, this system also allows the ecosystem to grow further -- with smaller labs helping to check the larger labs, and vice versa. The rating system associated with the labs would also provide incentives for the ecosystem to increase in quality.
### Personal genome files are huge. How would you expect to send these files via Blockchain?
You're right -- genome files are quite large. Raw PCR output can be up to 900GB, and even VCF files hover around 10-100MB (for a subset of sequences) or 1GB (for Whole Genome Sequencing). Here's our strategy in enabling these files to be shared and owned by the user:
* First, we will focus on the VCF files exclusively. In our initial POC, only the smaller VCF files will be included in the "result package" sent to each user, along with the report.
* Second, we will utilize a combination IPFS / torrent platform to act as the decentralized storage mechanism. The "result package" is encrypted off-chain (with the user's public key) and put within this decentralized storage platform.
* Third, the main blockchain platform itself will link to the decentralized storage mechanism through a hash list. This means that the main blockchain platform only contains pointers to the data in decentralized storage, and not the actual genomic files. In the enterprise/consortium strategy, the IPFS/torrent platform can be replaced with regular public or private cloud solutions.
